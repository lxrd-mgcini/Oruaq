import { useQuery } from "@tanstack/react-query";
import { getAllProductsQueryFn } from "@/services/API";
import { ProductResponseType } from "@/types/API.type";
import { Link, useNavigate } from "react-router";
import { useCart } from "@/store/cart";

export default function NewProducts() {
  const addCart = useCart((state) => state.addCart);
  // const cart = useCart((state) => state.cart);

  let navigate = useNavigate();

  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProductsQueryFn,
  });
  return (
    <div className="mt-8 flex flex-col gap-8 text-center">
      <h1 className="text-4xl font-semibold text-black">Most Popular</h1>
      <div className="mt-4 grid grid-cols-1 grid-rows-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {products
          ?.slice(0, 3)
          .reverse()
          .map((product: ProductResponseType) => {
            return (
              <div className="flex aspect-square h-full w-full flex-1 flex-col text-center">
                <div className="aspect-square h-max w-full overflow-hidden">
                  <Link to={`/products/${product._id}`}>
                    <img
                      src={product.imgUrl[0] || "/images/body-care.jpg"}
                      alt=""
                      className="h-[100vw] min-w-full object-cover object-center transition duration-500 ease-in-out hover:scale-110 sm:h-full"
                    />
                  </Link>
                </div>

                <button
                  className="group relative flex w-full items-center self-center overflow-hidden bg-black px-5 py-2 font-medium text-white"
                  onClick={() => {
                    addCart({
                      ...product,
                      price: product.price,
                      quantity: 1,
                    });
                  }}
                >
                  <span className="backdrop-brightness-10 absolute left-0 top-0 mb-0 flex h-0 w-full translate-y-0 transform bg-brand transition-all duration-300 ease-out group-hover:h-full"></span>
                  <span className="relative w-full items-center self-center text-center group-hover:text-black">
                    Add to Cart
                  </span>
                </button>

                <h3 className="mt-1 w-full text-ellipsis text-nowrap font-semibold">
                  {product.name}
                </h3>
                <p>${product.price}</p>
              </div>
            );
          })}
      </div>
      <button
        className="group relative inline-block w-[200px] self-center overflow-hidden bg-brand/100 px-5 py-5 font-medium text-black"
        onClick={() => {
          navigate("/products");
        }}
      >
        <span className="absolute left-0 top-0 mb-0 flex h-0 w-full translate-y-0 transform bg-black transition-all duration-300 ease-out group-hover:h-full"></span>
        <span className="relative group-hover:text-white">More Products</span>
      </button>
    </div>
  );
}
