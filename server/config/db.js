import mongoose from "mongoose";
import colors from "colors";

export default async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(
      colors.bgGreen.white(`Mongodb connected ${mongoose.connection.host}`)
    );
  } catch (error) {
    console.log(`Mongodb Server Issue ${error}`.bgRed.white);
  }
}
