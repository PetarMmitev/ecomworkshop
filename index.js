import "dotenv/config";
import express from "express";
import mongoose from "mongoose";

const MONGO_URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

console.log(MONGO_URI);

const app = express();

app.use(express.json());

app.listen(process.env.PORT, process.env.HOST, async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongDB");
    console.log(`Server is up at port: ${process.env.PORT}`);
  } catch (error) {
    console.log(error);
  }
});