import express from 'express'
//const mongoose = require('mongoose');
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
//require('dotenv').config();
import userRoutes from "./routes/userRoutes.js";
import cors from 'cors'; 
//const userRoutes = require('./routes/userRoutes'); // Assuming you have userRoutes defined
// const express = require('express');

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
// Middleware
app.use(cors()); 
app.use(bodyParser.json()); // Parse JSON bodies
const MONGO_URL = process.env.MONGODB_URI;

// Routes
app.use("/api/user", userRoutes); // Use userRoutes for requests to /api/user

// Connect to MongoDB
mongoose
  .connect(MONGO_URL, {
  
  })
  .then(() => {
    console.log("Connected to MongoDB");
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
