import React from "react";
import styles from "./cartcard.module.css";
import axios from "axios";
import { IncDecCart } from "../../../../services/services";
import { useAuth } from "../../../../context/auth-context";
import { useData } from "../../../../context/data-context";

const CartCard = ({ product }) => {
  const authValue = useAuth();
  const dataValue = useData();

  const IncDecCartQuantity = async (productId, type) => {
    const res = await IncDecCart({
      productId: product?._id,
      encodedToken: authValue.token,
      type: type,
    });

    dataValue?.updateCart(res?.data?.cart);

    console.log("ressss inc dec", res);
  };

  return (
    <div className={styles?.card}>
      <div className={styles?.imgSection}>
        <img src={product?.img} />
      </div>
      <div className={styles?.detail}>
        <div className={styles?.name}>{product?.name}</div>
        <div className={styles?.author}>by {product?.author}</div>
        <div className={styles?.originalPrice}>₹ {product?.originalPrice}</div>
        <div className={styles?.price}>₹ {product?.price}</div>
        <div>
          Quantity:{" "}
          <button
            onClick={() => {
              IncDecCartQuantity(product?._id, "decrement");
            }}
            disabled={product?.qty === 1 || product?.qty < 1}
          >
            -
          </button>{" "}
          {product?.qty}{" "}
          <button
            onClick={() => {
              console.log("hiii");
              IncDecCartQuantity(product?._id, "increment");
            }}
          >
            +
          </button>
        </div>
        <div>
          <button>Remove from Cart</button>
          <button>Move to Wishlist</button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CartCard;
