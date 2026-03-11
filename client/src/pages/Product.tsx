import Announcement from "@/components/Announcement";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import MainLayout from "@/layout/MainLayout";
import { getProductByIdQueryFn } from "@/services/API";
import { useCart } from "@/store/cart";
import { useQuery } from "@tanstack/react-query";
import { ShoppingBag } from "lucide-react";

import { Link, useParams } from "react-router";

export default function Product() {
  const params = useParams();
  const productId: string = params.productId ?? "";

  const { data: product } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProductByIdQueryFn(productId),
  });

  console.log(product);
  const addCart = useCart((state) => state.addCart);
  // const cart = useCart((state) => state.cart);

  //   const params = useParams();
  const tags = ["nailcare", "cosmetic"];

  return (
    <div className="relative max-w-full">
      <Announcement />
      <Navbar />
      <MainLayout>
        {product ? (
          <div className="flex flex-col-reverse gap-4 sm:flex-row">
            <div className="flex flex-1 flex-col gap-4">
              <div className="h-[60vh]">
                <img
                  className="h-full w-full object-cover"
                  src={"/images/make-up-img-4-768x960.jpg"}
                  alt=""
                />
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="h-[30vh]">
                  <img
                    className="h-full w-full object-cover object-center"
                    src={"/images/make-up-img-4-768x960.jpg"}
                    alt=""
                  />
                </div>
                <div className="h-[30vh]">
                  <img
                    className="h-full w-full object-cover object-center"
                    src="/images/make-up-img-4-768x960.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="flex-1 text-black">
              <div>
                <p className="underline">Product Details</p>
                <div className="text-center">
                  <h3 className="mt-8 text-4xl font-medium">{product?.name}</h3>
                  <h4 className="mt-8 text-4xl font-light">
                    ${product?.price}
                  </h4>
                  <div className="my-8 flex justify-center gap-4">
                    <p>
                      <strong>Category</strong>: Cosmetics
                    </p>
                    <p>
                      <strong className="no-underline">Tags</strong>:
                      {tags.map((tag) => {
                        return (
                          <Link to={`/products/${tag}`}>
                            {" "}
                            <span className="underline">{tag},</span>
                          </Link>
                        );
                      })}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="underline">Quantity Details</p>
                <p>{product.description}</p>
                <div className="flex flex-col gap-4 pt-4 lg:flex-row">
                  <button
                    className="flex h-[64px] w-full items-center justify-center gap-2 bg-black text-white transition duration-300 hover:scale-105"
                    onClick={() => {
                      addCart({
                        ...product,
                        price: product?.price,
                        quantity: 1,
                      });
                    }}
                  >
                    <ShoppingBag size={20} /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading</p>
        )}
      </MainLayout>
      <Footer />
    </div>
  );
}
