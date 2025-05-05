



// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const multer = require('multer');
// const upload = multer();

// const productRoute = require('./routes/api/productRoute');

// // Connecting to the Database
// let mongodb_url = 'mongodb://app-mongo/'; 
// let dbName = 'yolomy';

// // Docker override: use container host if available
// const MONGODB_URI = process.env.MONGODB_URI || mongodb_url + dbName;

// mongoose.connect(MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// let db = mongoose.connection;

// // Check Connection
// db.once('open', () => {
//   console.log('Database connected successfully');
// });

// // Check for DB Errors
// db.on('error', (error) => {
//   console.error('MongoDB connection error:', error);
// });

// // Initializing express
// const app = express();

// // Body parser middleware
// app.use(express.json());
// app.use(upload.array());

// // CORS
// app.use(cors());

// // Use Route
// app.use('/api/products', productRoute);

// // Simple root route (for testing)
// app.get('/', (req, res) => {
//   res.send('Backend is running');
// });

// // Define the PORT and bind to all interfaces for Docker
// const PORT = process.env.PORT || 5000;
// const HOST = '0.0.0.0';

// app.listen(PORT, HOST, () => {
//   console.log(`Server listening on http://${HOST}:${PORT}`);
// });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const upload = multer();

const productRoute = require('./routes/api/productRoute');

// Connecting to the Database
let mongodb_url = 'mongodb://app-mongo/'; // Use container hostname for Docker
let dbName = 'yolomy';

// Docker override: use container host if available
const MONGODB_URI = process.env.MONGODB_URI || mongodb_url + dbName;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let db = mongoose.connection;

// Check Connection
db.once('open', () => {
  console.log('Database connected successfully');
});

// Check for DB Errors
db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

// Initializing express
const app = express();

// Body parser middleware
app.use(express.json());
app.use(upload.array()); // Handles form-data, used for file uploads

// CORS
app.use(cors());

// Use Route
app.use('/api/products', productRoute);

// Simple root route (for testing)
app.get('/', (req, res) => {
  res.send('Backend is running');
});

// Define the PORT and bind to all interfaces for Docker
const PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`Server listening on http://${HOST}:${PORT}`);
});
