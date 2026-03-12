import { Link, useNavigate } from "react-router";
import Card from "../Card";
import { ProductResponseType } from "@/types/API.type";

import { getAllProductsQueryFn } from "@/services/API";
import { useQuery } from "@tanstack/react-query";

export default function Popular() {

  let navigate = useNavigate()
  
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProductsQueryFn,
  });


  return (
    <div className="mt-8 flex flex-col gap-8 text-center">
      <h1 className="text-4xl font-semibold text-black">Most Popular</h1>
      <div className="mt-4 grid grid-cols-1 grid-rows-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {products?.slice(0,3).map((card: ProductResponseType) => (
          <Link to={`/products/${card._id}`}>
            <Card title={card.name} price={card.price} image={card.imgUrl[0]} />
          </Link>
        ))}
      </div>
      <button className="group relative inline-block w-[200px] self-center overflow-hidden bg-brand/100 px-5 py-5 font-medium text-black" onClick={()=>navigate('/products')}>
        <span className="absolute left-0 top-0 mb-0 flex h-0 w-full translate-y-0 transform bg-black transition-all duration-300 ease-out group-hover:h-full"></span>
        <span className="relative group-hover:text-white">More Products</span>
      </button>
    </div>
  );
}
