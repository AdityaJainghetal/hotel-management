const express = require('express');
const mongoose = require('mongoose');
const BookingModel = require('../model/BookingModel.js');
const router = express.Router();

// Route to handle booking villa
router.post('/book-villa', async (req, res) => {
    const { name, email, phone, checkInDate, checkOutDate } = req.body;

    // Convert villaId to ObjectId
   
    const newBooking = new BookingModel({
        name,
        email,
        phone,
        checkInDate,
        checkOutDate,
        
    });

    try {
        // Save the booking data to MongoDB
        const savedBooking = await newBooking.save();
        res.status(201).json({ message: 'Villa booked successfully!', booking: savedBooking });
    } catch (error) {
        res.status(500).json({ message: 'Error booking villa', error });
    }
});

router.get('/bookings', async (req, res) => {
    try {
        const bookings = await BookingModel.find(); // Fetch all bookings from the database
        res.status(200).json(bookings); // Return the bookings as JSON
    } catch (error) {
        res.status(500).json({ message: 'Error fetching bookings', error });
    }
});

router.get('/locations', async (req, res) => {
    try {
        const locations = await VillaModel.distinct('location'); // Fetch all unique locations from the database
        res.status(200).json(locations); // Return the locations as JSON
    } catch (error) {
        res.status(500).json({ message: 'Error fetching locations', error });
    }
});


module.exports = router;
