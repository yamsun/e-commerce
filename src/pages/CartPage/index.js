import React, { useContext, useEffect, useState } from "react";
import styles from "./cartpage.module.css";
import { DataContext, useData } from "../../context/data-context";
import CartCard from "./components/CartCard";

const CartPage = () => {
  const dataValue = useData();
  const cartValue = useContext(DataContext)?.cartData;
  const cartData = dataValue?.cartData;
  console.log("cart data", cartData);

  const price = cartData?.reduce((acc, curr) => {
    return acc + curr?.price * curr?.qty;
  }, 0);

  const originalPrice = cartData?.reduce((acc, curr) => {
    return acc + curr?.originalPrice * curr?.qty;
  }, 0);

  const deliveryCharge = 50;

  return (
    <div className={styles.page}>
      <div className={styles.items}>
        <h2>My Cart ({cartData?.length}) </h2>
        <hr />
        <div className={styles.list}>
          {cartData?.map((item, index) => {
            return <CartCard product={item} key={item?._id} />;
          })}
        </div>
      </div>
      <div className={styles.summary}>
        <h3>Summary</h3>
        <p>Price Details</p>
        <hr />
        <div className={styles.summaryItem}>
          <p>Price:</p>
          <p>{price}</p>
        </div>
        <div className={styles.summaryItem}>
          <p>Discount:</p>
          <p>{originalPrice - price}</p>
        </div>
        <div className={styles.summaryItem}>
          <p>Delivery Charges:</p>
          <p>{deliveryCharge}</p>
        </div>
        <hr />
        <div className={styles.summaryItem}>
          <p>Total Amount:</p>
          <p>{price + deliveryCharge}</p>
        </div>
        <hr />
        <div className={styles.summaryItem}>
          <div>You will save ₹ {originalPrice - price} on this order</div>
        </div>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
