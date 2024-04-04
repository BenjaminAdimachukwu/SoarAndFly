import jwt from 'jsonwebtoken'
import crypto from 'crypto'
//const jwt = require('jsonwebtoken');
const secretKey = crypto.randomBytes(32).toString('hex');
//console.log('Generated secret key:', secretKey);

// Secret key for signing the token
//const secretKey = 'your_secret_key_here'; // Replace with your secret key

// Generate a JWT token
const generateToken = (userId) => {
  // Payload to be included in the token (you can customize this payload as per your requirements)
  const payload = {
    userId: userId,
  };

  // Options for signing the token
  const options = {
    expiresIn: '1h', // Token expiration time (optional)
  };

  // Sign the token with the payload, secret key, and options
  const token = jwt.sign(payload, process.env.SECRET_KEY, options);

  return token;
};

export default generateToken

// Usage example
// const userId = 'user_id_here'; // Replace with the actual user ID
// const token = generateToken(userId);
// console.log('Generated token:', token);
