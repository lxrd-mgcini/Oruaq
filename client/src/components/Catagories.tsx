import { Link } from "react-router";

export default function Catagories() {
  const cardData = [
    {
      id: 1,
      name: "Skin Care",
      description: "Remove spots and blemishes easily.",
      imgUrl: "skin-care.jpg",
    },
    {
      id: 2,
      name: "Body Care",
      description: "Keep your skin young and protected",
      imgUrl: "body-care.jpg",
    },

    {
      id: 3,
      name: "Hand Care",
      description: "Acts as an antioxidant, helping protect cells.",
      imgUrl: "body-care.jpg",
    },
    {
      id: 4,
      name: "Hair Care",
      description: "Acts as an antioxidant, helping protect cells.",
      imgUrl: "body-care.jpg",
    },
    {
      id: 5,
      name: "Fragrances",
      description: "No harsh chemicals, only natural cleanser.",
      imgUrl: "fragrances.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 pb-4 pt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5">
      {cardData.map((card, index) => {
        return (
          <div
            key={index}
            className="] relative z-0 flex h-[400px] flex-col-reverse border bg-cover bg-center bg-no-repeat p-8 text-white sm:bg-[center_bottom_0.2rem] md:bg-[center] lg:bg-[center_bottom] xl:bg-[center_bottom] 2xl:bg-[center_bottom]"
            style={{ backgroundImage: `url(/images/${card.imgUrl})` }}
          >
            {/* Dark Background */}
            <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/50"></div>
            <div className="z-20 flex flex-col gap-4 text-center">
              <h3 className="font-bold">{card.name}</h3>
              <p className="font-light">{card.description}</p>
              <div className="z-20 flex justify-center">
                <Link to="/products">
                  <button className="group relative inline-flex items-center justify-center overflow-hidden bg-white px-12 py-6 font-medium text-black transition hover:scale-110">
                    <span>Shop Now</span>
                    <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                      <div className="backdrop-brightness-40 relative h-full w-8 bg-brand/40"></div>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
