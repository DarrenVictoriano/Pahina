// Initialize Express
const express = require('express');
const app = express();

// Initialize Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Save this space for the routes
// const routes = require('./routes');
// app.use(routes);

// Save space for MongoDB
// // Initialize MongoDB
// const mongoose = require('mongoose');
// let DB = process.env.MONGO_LOCAL_DB;

// // Connect to MongoDB
// mongoose.connect(DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// })
//     .then(() => {
//         console.log("MongoDB connected Successfully!");
//     })
//     .catch(err => {
//         console.log("MongoDB connection Error: " + err);
//     });

// Server PORT
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, function () {
    console.log("Server is running on http://localhost:" + PORT);
});