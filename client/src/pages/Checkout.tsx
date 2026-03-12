import Announcement from "@/components/Announcement";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import MainLayout from "@/layout/MainLayout";
import { useShallow } from "zustand/shallow";
import { CartItem, useCart } from "../store/cart";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { toast } from "sonner";
import { createOrderMutationFn } from "@/services/API";
import {  useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import confetti from "canvas-confetti"




interface Order {
  paymentMethod: "CASH-ON-COLLECTION" | "ECOCASH" | "ONEWALLET" | "VISA";
  phoneNumber: string;
  items: CartItem[];
}

const Checkout = () => {
  const navigate = useNavigate()

  const celebration = ()=>{
    const end = Date.now() + 4 * 1000 // 3 seconds
    const colors = ["#fff0d9", "#d9d9d99e", "#77736E", "#77736E"]
    const frame = () => {
      if (Date.now() > end) return
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 60,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      })
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 60,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      })
      requestAnimationFrame(frame)
    }
    frame()
  }

  const { count, cart, addCart, removeCart, clearCart} = useCart(
    useShallow((state) => ({
      count: state.count,
      cart: state.cart,
      addCart: state.addCart,
      removeCart: state.removeCart,
      clearCart:state.clearCart
    })),
  );
  const totalItems = count;
  const totalPrice = cart.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0,
  );

  const [order, setOrder] = useState<Order>({
    paymentMethod: "CASH-ON-COLLECTION",
    phoneNumber: "",
    items: cart
  });
  

  const mutation = useMutation({
  mutationFn: createOrderMutationFn,
  onSuccess: () => {
    toast.success("Order Successfully Placed");
    celebration()
    clearCart()    
    navigate('/products');
   
    
    
  },
  onError: () => {
    toast.warning("Please login or register to create your order");
  },
});

const handleOrderSubmit = () => {
  console.log(order);
  mutation.mutate(order)
  // We removed this since its currently cash on collection methods
  // toast("Placing your Order", {
  //   description: "Please enter your PIN on your phone to complete your order",
  // });
};

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target; // Destructure name and value from the event target
    setOrder({
      ...order, // Copy all other values
      [name]: value, // Update the specific field using computed property names
    });
  };

  return (
    <div className="relative max-w-full ">
      <Announcement />
      <Navbar />
      <MainLayout>
        <div className="grid grid-cols-1 grid-rows-2 gap-16 md:mx-4 lg:mx-8 lg:grid-cols-2 lg:grid-rows-1">
          <div className="text-black">
            <h2 className="mb-4 text-3xl font-semibold text-black">
              Order Details
            </h2>
            <form action="submit">
              <p className="text-xl font-semibold mb-2">
                Select your payment method:
              </p>
              <RadioGroup
                defaultValue="cash-on-collection"
                className="w-fit gap-4 font-sans"
              >
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="cash-on-collection" id="r1" />
                  <Label htmlFor="r1">Cash on Collection (USD)</Label>
                </div>
                {/* <div className="flex items-center gap-3">
                  <RadioGroupItem value="onewallet" id="r2" disabled />
                  <Label htmlFor="r2">OneWallet USD</Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="visa" id="r3" disabled />
                  <Label htmlFor="r3">VISA</Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="visa" id="r3" disabled />
                  <Label htmlFor="r3">VISA</Label>
                </div> */}
              </RadioGroup>

              <br />

              <p className="text-xl font-semibold mb-2">Enter your phone number:</p>
              <p className="text-sm font-semibold text-black/50 mb-2">
                Enter the phone number we can contact you on
              </p>

              <input
                type="text"
                name="phoneNumber"
                placeholder="0712345678"
                className="mt-2 border-2 border-black px-4 py-2"
                value={order.phoneNumber}
                onChange={handleChange}
              />
            </form>
          </div>

          <div>
            <div>
              <h2 className="text-3xl font-semibold text-black">Summary</h2>
              <hr className="my-4 border border-black50" />
              <ul>
                {cart.map((item) => (
                  <li
                    key={item._id + item.name}
                    className="flex justify-between text-black"
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
                    <p>${(Number(item.price) * item.quantity).toFixed(2)}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-between border-t border-dashed border-neutral-400 pt-2 text-[0.9rem] font-medium text-black">
              <p>Total items:</p>
              <p>{totalItems}</p>
            </div>

            <div className="flex justify-between border-t border-dashed border-neutral-400 pt-2 text-[0.9rem] font-medium text-black">
              <p>Total Price:</p>
              <p className="font-bold">${totalPrice}</p>
            </div>

            {order.phoneNumber.length === 10 && cart.length > 0 ? (
              <div className="flex flex-col gap-4 pt-4 lg:flex-row">
                <button
                  className="flex h-[64px] w-full items-center justify-center gap-2 bg-black text-white transition duration-300 hover:scale-105"
                  disabled={mutation.isPending}
                  onClick={handleOrderSubmit}
                >
                  Place Order
                </button>
              </div>
            ) : (
              <button className="flex h-[64px] w-full items-center justify-center gap-2 bg-muted-foreground text-muted hover:cursor-not-allowed">
                Place Order
              </button>
            )}
          </div>
        </div>
      </MainLayout>
      <Footer />
    </div>
  );
};
export default Checkout;
