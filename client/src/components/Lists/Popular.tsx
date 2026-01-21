import { Link } from "react-router";
import Card from "../Card";

export default function PopularProducts() {
  const cardData = [
    {
      id: 1,
      productName: "Vitamin C Extract",
      price: "100.00",
    },
    {
      id: 2,
      productName: "Anti Aging Moisturiser",
      price: "100.00",
    },
    {
      id: 3,
      productName: "Skin Care",
      price: "100.00",
    },
  ];
  return (
    <div className="mt-8 flex flex-col gap-8 text-center">
      <h1 className="text-4xl font-semibold text-black">Most Popular</h1>
      <div className="mt-4 grid grid-cols-1 grid-rows-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {cardData.map((card) => (
          <Link to={`/products/${card.id}`}>
            <Card productName={card.productName} price={card.price} />
          </Link>
        ))}
      </div>
      <button className="group relative inline-block w-[200px] self-center overflow-hidden bg-brand/100 px-5 py-5 font-medium text-black">
        <span className="absolute left-0 top-0 mb-0 flex h-0 w-full translate-y-0 transform bg-black transition-all duration-300 ease-out group-hover:h-full"></span>
        <span className="relative group-hover:text-white">More Products</span>
      </button>
    </div>
  );
}
