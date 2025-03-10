const mongoose = require('mongoose');
const VillaModel = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  images: [{
    type: String,
    required: true
  }],
  guests: {
    type: Number,
    required: true
  },
  bedrooms: {
    type: Number,
    required: true
  },
  bathrooms: {
    type: Number,
    required: true
  },
  squareMeters: {
    type: Number,
    required: true
  },
  checkInTime: {
    type: String,
    default: "05:59"
  },
  checkOutTime: {
    type: String,
    default: "11:00"
  },
  isDeleted: { type: Boolean, default: false },
}, { timestamps: true });
module.exports = mongoose.model('villas', VillaModel)







// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();

// app.use(express.json());

// // MongoDB connection
// mongoose.connect('mongodb://localhost/villas', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
//   .then(() => console.log('Connected to MongoDB...'))
//   .catch(err => console.error('Could not connect to MongoDB...', err));

// // Villa Schema
// const villaSchema = new mongoose.Schema({
//   name: String,
//   location: String,
//   price: Number,
//   size: String,
//   imageUrl: String
// });

// const Villa = mongoose.model('Villa', villaSchema);

// // Get all villas (GET Request)
// app.get('/api/villas', async (req, res) => {
//   try {
//     const villas = await Villa.find();
//     res.send(villas);
//   } catch (error) {
//     res.status(500).send("Something went wrong.");
//   }
// });

// // Add new villa (POST Request)
// app.post('/api/villas', async (req, res) => {
//   try {
//     let villa = new Villa({
//       name: req.body.name,
//       location: req.body.location,
//       price: req.body.price,
//       size: req.body.size,
//       imageUrl: req.body.imageUrl
//     });
//     villa = await villa.save();
//     res.send(villa);
//   } catch (error) {
//     res.status(400).send("Error adding new villa.");
//   }
// });

// // Update existing villa (PUT Request)
// app.put('/api/villas/:id', async (req, res) => {
//   try {
//     const villa = await Villa.findByIdAndUpdate(req.params.id, {
//       name: req.body.name,
//       location: req.body.location,
//       price: req.body.price,
//       size: req.body.size,
//       imageUrl: req.body.imageUrl
//     }, { new: true });

//     if (!villa) return res.status(404).send("The villa with the given ID was not found.");
//     res.send(villa);
//   } catch (error) {
//     res.status(400).send("Error updating villa.");
//   }
// });

// // Delete villa (DELETE Request)
// app.delete('/api/villas/:id', async (req, res) => {
//   try {
//     const villa = await Villa.findByIdAndRemove(req.params.id);

//     if (!villa) return res.status(404).send("The villa with the given ID was not found.");
//     res.send(villa);
//   } catch (error) {
//     res.status(400).send("Error deleting villa.");
//   }
// });

// // Start the server
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server running on port ${port}...`);
// });
