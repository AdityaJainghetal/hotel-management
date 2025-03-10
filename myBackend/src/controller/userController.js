const UserModel = require("../model/userModel");
const { signInToken } = require("../utils/auth");
const Helper = require("../utils/helper");
const bcrypt = require("bcryptjs");
const saltRounds = 10;
async function getUserWithToken(userId) {
  try {
    let userDetail = await userProfile(userId);
    //userDetail.first_name + " " + userDetail.last_name, if we want to send then use it
    const token = signInToken(userId);
    return { token: token, userDetail: userDetail };
  } catch (error) {
    console.log(error);
    return {};
  }
}
const userProfile = async (userId) => {
  try {
    let userProfile = await UserModel.findById(userId).select({
      password: 0,
      __v: 0,
      createdAt: 0,
      updatedAt: 0,
    });
    return userProfile;
  } catch (error) {
    return false;
  }
};


//for creating User
const register = async (req, res) => {
  try {
    let {
     name,
      email,
      password,
    
    } = req.body;

    if (!name) {
      return Helper.fail(res, "name is required!");
    }
    if (!email) {
      return Helper.fail(res, "Email is required!");
    }
    if (!password) {
      return Helper.fail(res, "Password is required!");
    }
    // Validating email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      return Helper.fail(res, "Email is not valid!");
    }
    let checkObj = { $or: [{ email: email }] };
    
    let userCheck = await UserModel.find(checkObj);
    if (userCheck.length > 0) {
      return Helper.fail(res, "User already exists with this email or mobile!");
    }
   
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    let userObj = {
      name,
      email,
      password: hashedPassword,
    };
    let createUser = await UserModel.create(userObj);
    return Helper.success(res, "SignUp successfully!", createUser);
  } catch (error) {
    console.log(error);
    return Helper.fail(res, error.message);
  }
};
//for updating User
const update = async (req, res) => {
  try {
    const {userId}  = req.body;
    const {  name, email,} =
      req.body;
    if (!userId) {
      return Helper.fail(res, "userId is missing from request");
    }
    //validating email
    if (email) {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailRegex.test(email)) {
        return Helper.fail(res, "Email is not valid!");
      }
    }
    //checking customer exist or not
    let user = await UserModel.findById(userId);
    if (!user) {
      return Helper.fail(res, "user not found!");
    }
    let objToUpdate = {};
      if (name) {
        objToUpdate.name = name;
      }
    if (email) {
      // Case insensitive search for email already used
      const emailRegex = new RegExp(`^${email}$`, "i");
      const user = await UserModel.findOne({
        email: emailRegex,
        _id: { $ne: userId },
      });

      if (user) {
        return Helper.fail(res, "Email is already used in another account");
      }
      objToUpdate.email = email;
    }
    let updateProfile = await UserModel.findByIdAndUpdate(userId, objToUpdate, {
      new: true,
    });
    if (updateProfile) {
      return Helper.success(res, "User  updated successfully!", updateProfile);
    }
  } catch (error) {
    console.log(error);
    return Helper.fail(res, error.message);
  }
};
//for soft Delete User
const remove = async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) {
      return Helper.fail(res, "Please provide user id ");
    }
    let i = { _id: userId };
    let deleted = await UserModel.findOneAndUpdate(
      i,
      { isDeleted: true },
      { new: true }
    );
    if (!deleted) {
      return Helper.fail(res, "No user found!");
    }
    return Helper.success(res, " user  deleted successfully", deleted);
  } catch (error) {
    console.log(error);
    return Helper.fail(res, error.message);
  }
};
//for finding userBy UserId
const findUserById = async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) {
      return Helper.fail(res, "userId is required");
    }
    const user = await UserModel.findById(userId);

    if (!user) {
      return Helper.fail(res, "User not found");
    }
    return Helper.success(res, "User found", user);
  } catch (error) {
    console.log(error);
    return Helper.fail(res, "Failed to fetch user");
  }
};
//for updating User Password
const updatePassword = async (req, res) => {
  try {
    const { userId } = req.body;
    const { password, old_password } = req.body;
    if (!password || !old_password) {
      return Helper.fail(res, "Please enter old password and new password");
    }
    const user = await UserModel.findById({ _id: userId });
    if (!user) {
      return Helper.fail(res, "User not found");
    }
    const isMatch = await bcrypt.compare(old_password, user.password);
    if (!isMatch) {
      return Helper.fail(res, "Invalid old password");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    await user.save();
    return Helper.success(res, "Password updated successfully", null);
  } catch (error) {
    console.log(error);
    return Helper.fail(res, "Failed to update password");
  }
};
const userLogin = async (req, res) => {
  try {
    const { email,password } = req.body;
    if (!email) {
      return Helper.fail(res, "Please enter email ");
    }
    if (!password) {
      return Helper.fail(res, "Please enter password ");
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return Helper.fail(res, "Looks Like You Have Not Registered With us!");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return Helper.success(res, "Invalid Password" );
    }
    const { token, userDetail } = await getUserWithToken(user._id);
    if (!token || !userDetail) {
      return Helper.error("Failed to generate token or get user profile");
    }
    return Helper.success(res, "Login successfull", { token, userDetail, });
  } catch (error) {
    console.error(error)
    return Helper.fail(res, "Server error");
  }
};






module.exports = {
  register,
  update,
  remove,
  findUserById,
  updatePassword,
  userLogin
};
