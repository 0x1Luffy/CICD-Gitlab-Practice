require('dotenv').config();
const express = require('express');
const mongoose = require('./db/mongoose'); // Import MongoDB connection
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes'); // Import task routes

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/tasks', taskRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
