import { Link } from "react-router";

export default function Hero() {
  return (
    <div className="relative flex h-[60vh] w-full flex-col items-center justify-center bg-[url('../images/hero.jpg')] bg-cover bg-center bg-no-repeat sm:bg-[center_bottom_0.2rem] md:bg-[center] lg:bg-[center_left] xl:bg-[center_left] 2xl:bg-[center_left]">
      {/* Dark Background */}
      <div className="absolute z-0 h-full w-full bg-black/50"></div>

      <div className="z-10 flex flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-4xl font-semibold text-white sm:text-white md:text-4xl lg:text-5xl">
          Your Firming Body Care Routine
        </h1>
        <p className="text-white">
          Transform your skincare routine with our Almond Supple Skin Oil.
        </p>
        <div className="hidden sm:flex">
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
}
