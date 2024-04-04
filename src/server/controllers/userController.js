import bcrypt from 'bcrypt'
import User from '../models/User.js'
import generateToken from '../../utils/tokenUtils.js';


const userController = {
  // Handler function for user signup
  signup: async (req, res) => {
    try {
      const { fullName, email, password, confirmPassword } = req.body;

      if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match' });
      }

      // Check if user with the provided email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User with this email already exists' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user object
      const newUser = new User({
        fullName,
        email,
        password: hashedPassword,
        confirmPassword:hashedPassword
      });
// console.log({newUser})
      // Save the user to the database
      await newUser.save();

      // Send a success response
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Error while signing up:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      // Check if user with the provided email exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }

      // Compare the provided password with the hashed password stored in the database
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }

      // If email and password are valid, create and return a token (you may use JWT or any other authentication mechanism)
      // const token = generateToken(user._id);; // Replace with your token generation logic
      const { _id } = user; // Extract the _id from the user object
      const token = generateToken(_id);
      // Send the token and user details in the response
      res.status(200).json({ user, token });
    } catch (error) {
      console.error('Error while logging in:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  // Handler function for fetching user profile
  getUserProfile: async (req, res) => {
   try {
    res.json('Hello Benjamin')
   } catch (error) {
    res.status(500).json({error:" internal server error"})
   }
  },

  // Handler function for updating user profile
  updateUserProfile: async (req, res) => {
    // Implement profile updating logic here
  },

  // Handler function for deleting user account
  deleteUser: async (req, res) => {
    // Implement user deletion logic here
  }
};

export default userController
