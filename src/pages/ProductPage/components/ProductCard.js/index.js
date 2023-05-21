import axios from "axios";
import styles from "./ProductCard.module.css";
import { useAuth } from "../../../../context/auth-context";

export const ProductCard = ({ product }) => {
  const authValue = useAuth();
  console.log(authValue.token);
  const addToCart = async (product) => {
    try {
      const res = await axios.post(
        `/api/user/cart`,
        {
          product: product,
        },
        {
          headers: {
            authorization: `Bearer ${authValue.token}`, //the token is a variable which holds the token
          },
        }
      );

      console.log("add cart res", res);
    } catch (error) {
      console.log("add cart error", error);
    }
  };
  return (
    <div className={styles.card}>
      <div className={styles.heart}>♥</div>
      <img src="https://greendroprecycling.com/wp-content/uploads/2017/04/GreenDrop_Station_Aluminum_Can_Pepsi.jpg" />
      <div className={styles.detail}>
        <div className={styles.name}>{product?.title}</div>
        <div className={styles.author}>by {product?.author}</div>
        <div className={styles.price}>$ {product?.price}</div>
      </div>
      <button
        className={styles.btn}
        onClick={() => {
          console.log("add to cart", product?.id);
          addToCart(product);
        }}
      >
        <span>Add to Cart</span>
      </button>
    </div>
  );
};
