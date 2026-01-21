import Announcement from "@/components/Announcement";
// import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Tags from "@/components/Tags";
import MainLayout from "@/layout/MainLayout";
import { getAllProductsQueryFn } from "@/services/API";
import { useCart } from "@/store/cart";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";

type ProductProps = {
  _id: string;
  name: string;
  price: number;
  image: string;
};

export const Products = () => {
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProductsQueryFn,
  });

  const addCart = useCart((state) => state.addCart);
  const cart = useCart((state) => state.cart);

  console.log(cart);

  return (
    <div className="relative max-w-full">
      <div className="sticky top-0 z-20 bg-white">
        <Announcement />
        <Navbar />
        <Tags />
      </div>
      
      <MainLayout>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products?.map((product: ProductProps) => {
            return (
              <div className="flex aspect-square h-full w-full flex-1 flex-col text-center">
                <div className="relative aspect-square h-max w-full overflow-hidden">
                  <Link to={`/products/${product._id}`}>
                    <img
                      src={product.image || "/images/body-care.jpg"}
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

                <h3 className="mt-1 w-full overflow-hidden text-ellipsis text-nowrap font-semibold">
                  {product.name}
                </h3>
                <p>${product.price}</p>
              </div>
            );
          })}
        </div>
      </MainLayout>
      <Footer />
    </div>
  );
};
