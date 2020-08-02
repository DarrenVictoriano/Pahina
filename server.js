// Initialize Express
const express = require('express');
const app = express();
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const middleware = require('./middleware/errorHandler');

// for environment variable
require('dotenv').config();

// Initialize Middleware
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static asset (when deployed to heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Save this space for the routes
const routes = require('./routes');
app.use(routes);

// apply error hanlder
app.use(middleware.errorHandler);

// Initialize MongoDB
const mongoose = require('mongoose');
let DB = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("MongoDB connected Successfully!");
    })
    .catch(err => {
        console.log("MongoDB connection Error: " + err);
    });

// Server PORT
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, function () {
    console.log("Server is running on http://localhost:" + PORT);
});