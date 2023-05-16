import styles from "./Navbar.module.css";
export const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>MyShoppingSite</div>
      <div className={styles.search}>
        <input placeholder="Search" />
      </div>
      <div className={styles.buttons}>
        <div className={styles.wishlist}>❤️</div>
        <div className={styles.wishlist}>🛒 Cart</div>
      </div>
    </div>
  );
};
