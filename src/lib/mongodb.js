import mongoose from "mongoose";

const connection = {};

(async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URI, {});

    connection.isConnected = db.connections[0].readyState;

    console.log("MongoDb Connected");
  } catch (error) {
    console.log(error);
  }
})();
