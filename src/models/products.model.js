import { model, models, Schema } from "mongoose";

const productSchema = new Schema(
  {
    title: String,
    description: String,
    price: String,
    stock: String,
    brand: String,
    category: String,
    thumbnail: String,
    logicalErase: Boolean,
    images: [],
  },
  { timestamps: true }
);

const Products = models.products || model("products", productSchema);

export default Products;
