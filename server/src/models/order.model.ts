import mongoose, { Document, Schema } from "mongoose";

interface OrderItem {
  _id: Schema.Types.ObjectId;
  productId:{
    price:number
  }
  quantity: number;
  price: number;
}

interface OrderDocument extends Document {
  userId: Schema.Types.ObjectId;
  status: "PENDING" | "CANCELLED" | "DELIVERED";
  items: Array<OrderItem>;
  date: string;
  phoneNumber: string;
}

const orderSchema = new Schema<OrderDocument>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    status: {
      type: String,
      enum: ["PENDING", "CANCELLED", "DELIVERED"],
      required: true,
      default:"PENDING"
    },
    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: Number,
      },
    ],
  },
  { timestamps: true },
);

const OrderModel = mongoose.model<OrderDocument>("Orders", orderSchema);
export default OrderModel;
