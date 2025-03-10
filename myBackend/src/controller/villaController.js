const VillaModel = require("../model/villaModel");
const Helper = require("../utils/helper");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const createVilla = async (req, res) => {
  try {
    let {
      name,
      location,
      price,
      size,
      guests,
      bedrooms,
      bathrooms,
      squareMeters,
      checkInTime,
      checkOutTime
    } = req.body;

    if (!name || !location || !price || !size || !guests || !bedrooms || !bathrooms || !squareMeters || !req.file) {
      return Helper.fail(res, "All required fields must be filled!");
    }

    // Image handling
    const images = req.file.filename;

    // Check if villa with same name exists
    let villaCheck = await VillaModel.findOne({ name: name });
    if (villaCheck) {
      return Helper.fail(res, "Villa already exists with this name!");
    }

    // Create a Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: name,
              description: `Villa in ${location} with ${bedrooms} bedrooms and ${bathrooms} bathrooms.`,
              images: [`${process.env.BACKEND_URL}/uploads/${images}`],
            },
            unit_amount: 5000 * 100, // Convert to cents
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.FRONTEND_URL}/payment-success`,
      cancel_url: `${process.env.FRONTEND_URL}/payment-failure`,
    });

    return res.json({
      success: true,
      checkoutUrl: session.url, // Return the Stripe Checkout URL
    });
  } catch (error) {
    console.log(error);
    return Helper.fail(res, error.message);
  }
};



// Payment success callback
const paymentSuccess = async (req, res) => {
  try {
    const { session_id } = req.query;
    if (!session_id) {
      return Helper.fail(res, "Session ID is required!");
    }

    const session = await stripe.checkout.sessions.retrieve(session_id);
    if (session.payment_status !== 'paid') {
      return Helper.fail(res, "Payment not completed!");
    }

    // Store villa details in the database
    const villaData = {
      name: session.metadata.name,
      location: session.metadata.location,
      price: session.amount_total / 100, // Convert from cents
      size: session.metadata.size,
      guests: session.metadata.guests,
      bedrooms: session.metadata.bedrooms,
      bathrooms: session.metadata.bathrooms,
      squareMeters: session.metadata.squareMeters,
      checkInTime: session.metadata.checkInTime || "04:00",
      checkOutTime: session.metadata.checkOutTime || "11:00",
      images: session.metadata.images
    };

    const villa = await VillaModel.create(villaData);
    if (!villa) {
      return Helper.fail(res, "Villa creation failed!");
    }

    return res.redirect(`${process.env.FRONTEND_URL}/payment/success`);
  } catch (error) {
    console.log(error);
    return Helper.fail(res, error.message);
  }
};



// Get all villas
const getAllVillas = async (req, res) => {
  try {
    const villas = await VillaModel.find({});
    return Helper.success(res, "Villas fetched successfully!", villas);
  } catch (error) {
    console.log(error);
    return Helper.fail(res, error.message);
  }
};
// Get single villa by ID
const getVillaById = async (req, res) => {
  try {
    const { villaId } = req.params;

    if (!villaId) {
      return Helper.fail(res, "Villa ID is required!");
    }

    const villa = await VillaModel.findById(villaId);
    if (!villa) {
      return Helper.fail(res, "Villa not found!");
    }

    return Helper.success(res, "Villa fetched successfully!", villa);
  } catch (error) {
    console.log(error);
    return Helper.fail(res, error.message);
  }
};

// Update villa
const updateVilla = async (req, res) => {
  try {
    const { villaId } = req.params;
    let {
      name,
      location,
      price,
      size,
      guests,
      bedrooms,
      bathrooms,
      squareMeters,
      checkInTime,
      checkOutTime
    } = req.body;

    // Check if villa exists
    const existingVilla = await VillaModel.findById(villaId);
    if (!existingVilla) {
      return Helper.fail(res, "Villa not found!");
    }

    // If name is being updated, check for duplicates
    if (name && name !== existingVilla.name) {
      const duplicateVilla = await VillaModel.findOne({ name, _id: { $ne: villaId } });
      if (duplicateVilla) {
        return Helper.fail(res, "Villa already exists with this name!");
      }
    }

    // Create update object
    let updateObj = {
      name: name || existingVilla.name,
      location: location || existingVilla.location,
      price: price || existingVilla.price,
      size: size || existingVilla.size,
      guests: guests || existingVilla.guests,
      bedrooms: bedrooms || existingVilla.bedrooms,
      bathrooms: bathrooms || existingVilla.bathrooms,
      squareMeters: squareMeters || existingVilla.squareMeters,
      checkInTime: checkInTime || existingVilla.checkInTime,
      checkOutTime: checkOutTime || existingVilla.checkOutTime
    };

    // Handle image updates if new images are uploaded
    if (req.files && req.files.length > 0) {
      // Delete old images from storage (you'll need to implement this)
      // deleteOldImages(existingVilla.images);

      // Add new image paths
      updateObj.images = req.files.map(file => `/uploads/${file.filename}`);
    }

    // Update villa
    const updatedVilla = await VillaModel.findByIdAndUpdate(
      villaId,
      updateObj,
      { new: true }
    );

    return Helper.success(res, "Villa updated successfully!", updatedVilla);
  } catch (error) {
    console.log(error);
    return Helper.fail(res, error.message);
  }
};
//for soft delete villa
const removeVilla = async (req, res) => {
  try {
    const { villaId } = req.body;
    if (!villaId) return helper.fail(res, "VillaId Is Required");
    let v = { _id: villaId };
    let deleted = await VillaModel.findOneAndUpdate(
      v,
      { isDeleted: true },
      { new: true }
    );
    if (!deleted) {
      return Helper.fail(res, "No Villa found!");
    }
    return Helper.success(res, " Villa  deleted successfully", deleted);
  } catch (error) {
    console.error(error);
    return Helper.fail(res, "Something went Wrong!")
  }
}

module.exports = {
  createVilla,
  getAllVillas,
  getVillaById,
  updateVilla,
  removeVilla,
  paymentSuccess
};
