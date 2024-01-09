import mongoose from 'mongoose';

mongoose
  .connect(process.env.MONGO_URI, {
    retryWrites: true,
    w: 'majority',
    dbName: process.env.MONGO_DB_NAME,
  })
  .then(() => {
    console.log('Successfully connected to MongoDB');
    console.log(`DataSource: ${mongoose.connections[0].host}`);
  })
  .catch((err) => console.log(err));