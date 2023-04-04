const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});