import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//register callback
const registerController = async (req, res) => {
  try {
    const exisitingUser = await userModel.findOne({ email: req.body.email });
    if (exisitingUser) {
      return res
        .status(200)
        .send({ message: "User Already Exist", success: false });
    }
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).send({ message: "Register Sucessfully", success: true });
  } catch (error) {
    // console.log(error);
    res.status(500).send({
      success: false,
      message: `Register Controller ${error.message}`,
    });
  }
};

// login callback
const loginController = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found");
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res
        .status(200)
        .send({ message: "Invlid email or Password", success: false });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.status(200).json({ user, token });
  } catch (error) {
    // console.log(error);
    res.status(500).json(error);
  }
};

const authController = async (req, res) => {
  const userId = req.query.userId;
  const username = req.query.name;

  try {
    // Query the database based on userId or username
    const user = userId
      ? await userModel.findById(userId)
      : await userModel.findOne({ name: username });

    // Check if user exists before destructuring
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Destructure to remove sensitive fields like password
    const { password, updatedAt, ...other } = user._doc || user;

    // Return the remaining user details
    res.status(200).json(other);
  } catch (error) {
    // Return a 500 error for any server issues
    res.status(500).json({ error: error.message });
  }
};

export { loginController, registerController, authController };
