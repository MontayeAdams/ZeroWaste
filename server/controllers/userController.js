import User from "../models/userModel"; // Import the user model
import bcrypt from "bcrypt";

// User registration logic
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if a user with the same email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists.' });
    }

    // Create a new user document
    const newUser = new User({ name, email, password });

    // Save the new user document to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('User registration failed:', error);
    res.status(500).json({ error: 'Registration failed' });
  }
};

export default {
  signup,
};
