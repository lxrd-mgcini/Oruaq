import { Router } from "express";
import {
  createProductController,
  deleteProductByIdController,
  getAllProductsController,
  getProductByIdController,
  updateProductByIdController,
} from "../controllers/products.controller";
import { config } from "../config/app.config";
import { isAdmin, isAuthenticated } from "../middlewares/auth.middleware";

export const productRoutes = Router();

productRoutes.post(`/`,isAuthenticated,isAdmin, createProductController);
productRoutes.get(`/`, getAllProductsController);
productRoutes.get(`/:id`, getProductByIdController);
productRoutes.put(`/:id`,isAuthenticated,isAdmin, updateProductByIdController);
productRoutes.delete(`/:id`,isAuthenticated,isAdmin, deleteProductByIdController);
