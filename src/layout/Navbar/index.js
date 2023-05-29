import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext, useAuth } from "../../context/auth-context";
import styles from "./Navbar.module.css";
export const Navbar = () => {
  // const authValue = useAuth();
  const authValue = useContext(AuthContext);
  console.log("auth value from nav", authValue);

  return (
    <div className={styles.nav}>
      <Link to="/products">
        <div className={styles.logo}>MyShoppingSite</div>
      </Link>
      <div className={styles.search}>
        <input placeholder="Search" />
      </div>
      <div className={styles.buttons}>
        <div className={styles.wishlist}>❤️</div>
        <div className={styles.wishlist}>
          <Link to="/cart">🛒 Cart</Link>
        </div>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign up</Link>
        {!authValue?.token ? (
          "Login to kar!"
        ) : (
          <button
            onClick={() => {
              authValue?.logoutHandler();
            }}
          >
            LOGOUT
          </button>
        )}
        {authValue?.token ? "Hi " + authValue.currentUser?.firstName : ""}
        {}
      </div>
    </div>
  );
};
