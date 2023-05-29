import axios from "axios";
import styles from "./ProductCard.module.css";
import { useAuth } from "../../../../context/auth-context";
import { PostCart } from "../../../../services/services";
import { useData } from "../../../../context/data-context";

export const ProductCard = ({ product }) => {
  const authValue = useAuth();
  const dataValue = useData();
  const addToCart = async (product) => {
    const res = await PostCart({ product, encodedToken: authValue.token });
    console.log(res);
    dataValue?.updateCart(res?.data?.cart);
    // try {
    //   const res = await axios.post(
    //     `/api/user/cart`,
    //     {
    //       product: product,
    //     },
    //     {
    //       headers: {
    //         authorization: `${authValue.token}`, //the token is a variable which holds the token
    //       },
    //     }
    //   );
    //   console.log("add cart res", res);
    // } catch (error) {
    //   console.log("add cart error", error);
    // }
  };

  const isItemInCart = dataValue?.cartData?.some((i) => i?._id == product?._id);

  return (
    <div
      className={styles.card}
      onClick={() => {
        console.log("dataValue?.cartData", dataValue?.cartData);
        console.log("product id", product?._id);
      }}
    >
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
          console.log("add to cart", product?._id);
          addToCart(product);
          console.log("isItemInCart", isItemInCart);
        }}
      >
        <span>{!isItemInCart ? "Add to Cart" : "Go to Cart"}</span>
      </button>
    </div>
  );
};
