import styles from "./ProductCard.module.css";

export const ProductCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.heart}>♥</div>
      <img src="https://greendroprecycling.com/wp-content/uploads/2017/04/GreenDrop_Station_Aluminum_Can_Pepsi.jpg" />
      <div className={styles.detail}>
        <div className={styles.name}>Pepsi</div>
        <div className={styles.price}>$ 40</div>
      </div>
      <button className={styles.btn}>Add to Cart</button>
    </div>
  );
};
