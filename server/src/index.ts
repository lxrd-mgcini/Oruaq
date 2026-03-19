import express, { Request, Response } from "express";
import { productRoutes } from "./routes/products.routes";
import { connectToDatabase } from "./config/database.config";
import { config } from "./config/app.config";
import { errorHandler } from "./middlewares/errorHandler.middleware";
import { authRoutes } from "./routes/auth.routes";
import { isAuthenticated } from "./middlewares/auth.middleware";
import cookieParser from "cookie-parser";
import cors from "cors";
import { orderRoutes } from "./routes/order.routes";
import {  healthRoutes } from "./routes/health.route";

const app = express();

app.use(cookieParser());
app.use(cors({
  origin: config.FRONTEND_ORIGIN,
  credentials: true
}));

console.log(config.BASE_PATH)

app.use(express.json());
app.use(`${config.BASE_PATH}/products`, productRoutes);
app.use(`${config.BASE_PATH}`, authRoutes);
app.use(`${config.BASE_PATH}/order`, orderRoutes);
app.use(`${config.BASE_PATH}/health`,healthRoutes)

app.use(errorHandler);

app.listen(8800, () => {
  console.log(`Server running on port ${config.PORT}`);
  connectToDatabase(config.DATABASE_URL);
});
