const mongoose = require('mongoose');
// import { MongoClient } from "mongodb";
const db = process.env.MONGO_URI;

const connectDB = async () => {
try {
    // Connect to the MongoDB cluster
    mongoose.connect(
      db,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" Mongoose is connected"),
    );
  } catch (e) {
    console.log("could not connect",e);
  }
  
  const dbConnection = mongoose.connection;
  dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
  dbConnection.once("open", () => console.log("Connected to DB!"));
}
    
// const connectDB = async () => {
//   try {
//     console.log(db);
//     await mongoose.connect(`${db}`, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('MongoDB connected');
//   } catch (error) {
//     console.log(error.message);
//     process.exit(1);
//   }
// };


// export default connectDB;

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//     //   useCreateIndex: true,
//       useUnifiedTopology: true
//     });

//     console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
//   } catch (err) {
//     console.log(`Error: ${err.message}`.red);
//     process.exit(1);
//   }
// }

 module.exports = connectDB;