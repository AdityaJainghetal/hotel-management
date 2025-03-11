const express = require('express');
const mongoose = require('mongoose');
const BookingModel = require('../model/BookingModel.js');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const Helper = {
  fail: (res, message) => res.status(400).json({ success: false, message }),
};

// Route to handle booking villa
router.post('/book-villa', async (req, res) => {
  const { name, email, phone, checkInDate, checkOutDate } = req.body;

  // Validate required fields
  if (!name || !email || !phone || !checkInDate || !checkOutDate) {
    return Helper.fail(res, 'All required fields must be filled!');
  }

  try {
    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'inr',
            product_data: {
              name: `Booking for ${name}`,
              description: `Booking for ${name} from ${checkInDate} to ${checkOutDate}`,
            },
            unit_amount: 5000 * 100, // Hardcoded 5000 INR -> 500000 cents
          },
          quantity: 1,
        },
      ],
      metadata: {
        name,
        email,
        phone,
        checkInDate,
        checkOutDate,
      },
      success_url: `${process.env.FRONTEND_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/payment-failure`,
    });

    return res.json({
      success: true,
      checkoutUrl: session.url,
    });
  } catch (error) {
    console.log(error);
    return Helper.fail(res, error.message);
  }
});

// Payment success callback
router.get('/payment/success', async (req, res) => {
  try {
    const { session_id } = req.query;
    if (!session_id) {
      return Helper.fail(res, 'Session ID is required!');
    }

    // Retrieve the Stripe session
    const session = await stripe.checkout.sessions.retrieve(session_id);
    if (session.payment_status !== 'paid') {
      return Helper.fail(res, 'Payment not completed!');
    }

    // Extract booking details from metadata
    const { name, email, phone, checkInDate, checkOutDate } = session.metadata;

    // Store booking in the database
    const newBooking = await BookingModel.create({
      name,
      email,
      phone,
      checkInDate,
      checkOutDate,
      amountPaid: session.amount_total / 100, // Convert cents to INR
      stripeSessionId: session_id, // Optional: store for reference
    });
    console.log('New Booking:', newBooking);

    if (!newBooking) {
      return Helper.fail(res, 'Booking creation failed!');
    }

    // Redirect to frontend success page
    return res.redirect(`${process.env.FRONTEND_URL}/payment/success`);
  } catch (error) {
    console.log(error);
    return Helper.fail(res, error.message);
  }
});

// Fetch all bookings
router.get('/bookings', async (req, res) => {
  try {
    const bookings = await BookingModel.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bookings', error });
  }
});

module.exports = router;