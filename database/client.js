const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database connection established successfully.'))
  .catch((err) => console.log(err.message));

const client = mongoose.connection;

client.on('error', (err) => console.log(err.message));

module.exports = client;
