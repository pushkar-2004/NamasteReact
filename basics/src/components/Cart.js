import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  //   console.log("from /card")
  //   console.log(cartItems)
  return (
    <div>
      <h1>Cart</h1>
      <div>
        {cartItems.map((item, index) => {
          return <h4 key={index}>{item}</h4>;
        })}
      </div>
    </div>
  );
};

export default Cart;
