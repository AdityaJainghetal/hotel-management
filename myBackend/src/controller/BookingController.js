// controllers/bookingController.js

const Booking = require('../models/Booking');

// Controller function to handle booking a villa
const bookVilla = async (req, res) => {
  const { name, email, phone, checkInDate, checkOutDate } = req.body;

  // Creating a new booking document
  const newBooking = new Booking({
    name,
    email,
    phone,
    checkInDate,
    checkOutDate,
    
  });

  try {
    // Saving the booking data to MongoDB
    const savedBooking = await newBooking.save();
    res.status(201).json({ message: 'Villa booked successfully!', booking: savedBooking });
  } catch (error) {
    res.status(500).json({ message: 'Error booking villa', error });
  }
};

module.exports = {
  bookVilla,
};
