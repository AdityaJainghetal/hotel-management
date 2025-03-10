const VillaModel = require("../model/villaModel");
const Helper = require("../utils/helper");

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

    // Required field validations
    if (!name) {
      return Helper.fail(res, "Name is required!");
    }
    if (!location) {
      return Helper.fail(res, "Location is required!");
    }
    if (!price) {
      return Helper.fail(res, "Price is required!");
    }
    if (!size) {
      return Helper.fail(res, "Size is required!");
    }
    if (!guests) {
      return Helper.fail(res, "Number of guests is required!");
    }
    if (!bedrooms) {
      return Helper.fail(res, "Number of bedrooms is required!");
    }
    if (!bathrooms) {
      return Helper.fail(res, "Number of bathrooms is required!");
    }
    if (!squareMeters) {
      return Helper.fail(res, "Square meters is required!");
    }

    // Validate if images were uploaded
    if (!req.files || req.files.length === 0) {
      return Helper.fail(res, "At least one image is required!");
    }

    // Create image paths array from uploaded files
    const images = req.files.map(file => `/uploads/${file.filename}`);

    // Create villa object
    let villaObj = {
      name,
      location,
      price,
      size,
      guests,
      bedrooms,
      bathrooms,
      squareMeters,
      checkInTime: checkInTime || "04:00",
      checkOutTime: checkOutTime || "11:00",
      images
    };

    // Check if villa with same name already exists
    let villaCheck = await VillaModel.findOne({ name: name });
    if (villaCheck) {
      return Helper.fail(res, "Villa already exists with this name!");
    }

    // Create villa in database
    let createVilla = await VillaModel.create(villaObj);
    return Helper.success(res, "Villa added successfully!", createVilla);

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
const removeVilla = async (req,res)=>{
try {
  const {villaId} = req.body;
  if(!villaId) return helper.fail(res,"VillaId Is Required");
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
  return Helper.fail(res,"Something went Wrong!")
}
}

module.exports = {
  createVilla,
  getAllVillas,
  getVillaById,
  updateVilla,
  removeVilla

};
