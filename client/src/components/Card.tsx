type Props = {
  id:string
  title: string;
  price: number;
  image?: string;
  handleAdd: void
};



export default function Card({ title, price, image }: Props) {
  return (
    <div className="flex aspect-square h-full w-full flex-1 flex-col text-center">
      <div className="relative aspect-square h-max w-full overflow-hidden">
        <img
          src={image || "/images/body-care.jpg"}
          alt=""
          className="h-[100vw] min-w-full object-cover object-center transition duration-500 ease-in-out hover:scale-110 sm:h-full"
        />
      </div>

      <button className="group relative flex w-full items-center self-center overflow-hidden bg-black px-5 py-2 font-medium text-white">
        <span className="backdrop-brightness-10 absolute left-0 top-0 mb-0 flex h-0 w-full translate-y-0 transform bg-brand transition-all duration-300 ease-out group-hover:h-full"></span>
        <span className="relative w-full items-center self-center text-center group-hover:text-black">
          Add to Cart
        </span>
      </button>

      <h3 className="mt-1 w-full text-ellipsis text-nowrap font-semibold">
        {title}
      </h3>
      <p className="">${price}</p>
    </div>
  );
}
