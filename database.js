// Import mongoose
const mongoose = require("mongoose");

// Set strictQuery to true
mongoose.set('strictQuery', true);

// Connect to the database
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});