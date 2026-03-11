
import { useShallow } from 'zustand/shallow';
import { useCart } from '../store/cart';
import { Link } from 'react-router';
// import { Button } from './ui/button';

export default function Cart() {

    const { count, cart, addCart, removeCart } = useCart(
    useShallow((state) => ({
      count: state.count,
      cart: state.cart,
      addCart: state.addCart,
      removeCart: state.removeCart,
    }))
  );
    const totalItems = count;
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  console.log(cart)

  return (
    <div className="absolute top-10 h-fit w-[250px] bg-white flex flex-col gap-y-2 p-1 border-black border-2 z-30 sm:right-14">
      <h3 className="text-[1rem] text-black font-semibold border-b border-black50 pb-2">
        Cart:
      </h3>
      <ul>
        {cart.map((item) => (
          <li
            key={item._id + item.name}
            className=" text-black flex justify-between"
          >
            <p>
              {item.name.length > 15
                ? `${item.name.slice(0, 15)}...`
                : item.name}
            </p>
            <div className="flex items-center gap-x-2 font-semibold text-black">

              <button onClick={() => removeCart(item._id)}>-</button>
              <p>{item.quantity}</p>
              <button onClick={() => addCart(item)}>+</button>
            </div>
            <p>${(item.price * item.quantity).toFixed(2)}</p>
          </li>
        ))}
      </ul>
      <div className="text-[0.9rem] text-black font-medium flex justify-between border-t border-dashed border-neutral-400 pt-2">
        <p>Total items:</p>
        <p>{totalItems}</p>
      </div>
      <div className="text-[0.9rem] text-black font-medium flex justify-between border-t border-dashed border-neutral-400 pt-2">
        <p>Total Price:</p>
        <p className='font-bold'>${totalPrice}</p>
      </div>
      {cart.length > 0 && <Link to='/checkout'>
      <button className="group relative flex w-full items-center self-center overflow-hidden bg-black px-5 py-2 font-medium text-white">
        <span className="backdrop-brightness-10 absolute left-0 top-0 mb-0 flex h-0 w-full translate-y-0 transform bg-brand transition-all duration-300 ease-out group-hover:h-full"></span>
        <span className="relative w-full items-center self-center text-center group-hover:text-black">
          Proceed to Checkout
        </span>
      </button>
      </Link>}
      
    </div>
    // <div className="bg-red-950">
    //   <h1>Cart</h1>
    // </div>
  );
}