import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import shoe from "../assets/shoe.png";
const Home = () => {
  const dispatch = useDispatch();

  const cartHandler = (options) => {
    try {
      dispatch({
        type: "addToCart",
        payload: options,
      });

      toast.success("Added to cart", {
        style: { fontFamily: "Roboto", fontWeight: 700 },
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section>
      {shoppingData.map(({ id, qty, name, price, img, tax, shipping }) => {
        return (
          <Card
            id={id}
            key={id}
            qty={qty}
            name={name}
            price={price}
            imgSrc={img}
            tax={tax}
            shipping={shipping}
            handler={cartHandler}
          />
        );
      })}
    </section>
  );
};

const Card = ({ id, qty, name, price, imgSrc, shipping, tax, handler }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt="product item" />
      <p>{name}</p>
      <h3>${price}</h3>
      <button
        onClick={() => handler({ id, name, qty, price, imgSrc, tax, shipping })}
      >
        Add to Cart
      </button>
    </div>
  );
};

export const shoppingData = [
  {
    id: "radas;df",
    name: "Lenovo ThinkPad",
    qty: 1,
    price: 6000,
    img: "https://www.lenovo.com/medias/lenovo-thinkpad-e16-16-intel-pdp-hero.png?context=bWFzdGVyfHJvb3R8Mjg2MzM3fGltYWdlL3BuZ3xoYTgvaDY0LzE3MzEyNjMxMDI5NzkwLnBuZ3xlMTJkYTA2NjU0YTQ1MmNjN2NiYjRlMmJkYzgyYzFhZjYzMDlmNmYwY2Y1ZTBiNTg0MGVhYzM4MTRkZGUzZTRk",
    tax: 300,
    shipping: 100,
  },
  {
    id: "radfgljlkhf",
    name: "New Shoes",
    price: 18000,
    qty: 1,
    img: "https://images-cdn.ubuy.co.in/63cafe77db6fc709a4389363-new-style-men-39-s-shoes-breathable.jpg",
    tax: 200,
    shipping: 100,
  },
];

export default Home;
