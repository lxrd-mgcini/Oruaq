import { Router } from "express";
import {
  createProductController,
  deleteProductByIdController,
  getAllProductsController,
  getProductByIdController,
  updateProductByIdController,
} from "../controllers/products.controller";
import { config } from "../config/app.config";

export const productRoutes = Router();

productRoutes.post(`/`, createProductController);
productRoutes.get(`/`, getAllProductsController);
productRoutes.get(`/:id`, getProductByIdController);
productRoutes.put(`/:id`, updateProductByIdController);
productRoutes.delete(`/:id`, deleteProductByIdController);
