import { Request, Response } from "express";
import ProductModel from "../models/product.model";
import { asyncHandler } from "../middlewares/asyncHandler.middleware";
import {
  createProductSchema,
  getProductsByTagsSchema,
  productIdSchema,
} from "../validations/product.validation";
import {
  createProductService,
  deleteProductService,
  getAllProductsService,
  getProductByIdService,
  getProductByTagsService,
  updateProductByIdService,
} from "../services/product.services";
import { HTTPSTATUS } from "../config/http.config";

export const getAllProductsController = asyncHandler(
  async (req: Request, res: Response) => {
    // Get query string from request
    const tagsQuery = req.query.tags as string | undefined;

    // Check is query string exists, if not send all products
    if (tagsQuery === undefined) {
      const products = await getAllProductsService();
      return res.status(HTTPSTATUS.OK).json(products);
    }

    // Split the query string into an array of tags
    const tagsArray = tagsQuery?.split(",");

    // Validate the tags array
    const tags = getProductsByTagsSchema.parse(tagsArray);

    // Fetch products that have at least one of the specified tags
    const products = await getProductByTagsService(tags);
    return res.status(HTTPSTATUS.OK).json(products);
  }
);

export const createProductController = asyncHandler(
  async (req: Request, res: Response) => {
    const data = createProductSchema.parse(req.body);
    const product = await createProductService(data);

    res.status(HTTPSTATUS.OK).json(product);
  }
);

export const deleteProductByIdController = asyncHandler(
  async (req: Request, res: Response) => {
    const productId = productIdSchema.parse(req.params.id);

    await deleteProductService(productId);

    res.status(HTTPSTATUS.OK).json({
      message: "Product deleted successfully",
    });
  }
);

export const updateProductByIdController = asyncHandler(
  async (req: Request, res: Response) => {
    const productId = productIdSchema.parse(req.params.id);
    const product = createProductSchema.parse(req.body);

    const updatedProduct = await updateProductByIdService(productId, product);

    res.status(HTTPSTATUS.OK).json(updatedProduct);
  }
);

export const getProductByIdController = asyncHandler(
  async (req: Request, res: Response) => {
    const productId = productIdSchema.parse(req.params.id);

    const product = await getProductByIdService(productId);

    // Structure response to send object instead of an array
    res.status(HTTPSTATUS.OK).json(product);
  }
);
