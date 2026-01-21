import mongoose, { Document, Schema } from "mongoose";

export interface ProductDocument extends Document {
  name: string;
  description: string;
  price: number;
  imgUrl: string;
  tags: [];
}

const productSchema = new Schema<ProductDocument>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    description: { type: String, required: true, trim: true },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    imgUrl: {
      type: String,
      required: true,
      trim: true,
    },
    tags: {
      type: [String],
      required: false,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const ProductModel = mongoose.model<ProductDocument>("Products", productSchema);
export default ProductModel;
