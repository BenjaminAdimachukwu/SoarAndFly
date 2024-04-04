import express from 'express'
import userController from '../controllers/userController.js';

const router = express.Router();

// Route for user signup
router.post('/signup', userController.signup);

// Route for user login
router.post('/login', userController.login);

// Route for fetching user profile
router.get('/profile', userController.getUserProfile);

// Route for updating user profile
router.put('/profile', userController.updateUserProfile);

// Route for deleting user account
router.delete('/:userId', userController.deleteUser);

export default router
