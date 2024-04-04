import { Schema, model } from "mongoose";

const productSchema = new Schema({
  title: {
    type: String,
  },
  stock: {
    type: Number,
    minLength: 1,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  price: {
    type: Number,
  },
  rating: {
    type: Number,
    minLength: 1,
    maxLength: 5,
  },
});

export const Product = model("Product", productSchema);
