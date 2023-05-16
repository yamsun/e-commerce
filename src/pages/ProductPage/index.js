import { useState } from "react";
import { Navbar } from "../../layout/Navbar";
import styles from "./ProductPage.module.css";
import { ProductCard } from "./components/ProductCard.js";
import { SideFilter } from "./components/SideFilter";

export const ProductPage = () => {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <>
      <div className={styles.page}>
        <div
          className={`${styles.nav}  ${showFilter ? styles.filterOnPage : ""}`}
        >
          <Navbar />
        </div>

        <div
          className={`${styles.backdrop} ${
            showFilter ? styles.showBackDrop : ""
          }`}
          onClick={() => {
            setShowFilter(false);
          }}
        ></div>

        <div
          className={`${styles.side} ${showFilter ? styles.mobileFilter : ""}`}
          // className={showFilter ? styles.mobileFilter : styles.side}
        >
          {showFilter && (
            <div>
              <div
                onClick={() => {
                  setShowFilter(false);
                }}
                className={styles.closeFilterBtn}
              >
                ⓧ Close
              </div>
              <hr />
            </div>
          )}
          <SideFilter />
        </div>

        <div
          className={`${styles.main}  ${showFilter ? styles.filterOnPage : ""}`}
        >
          <div className={styles.head}>
            <h4>Showing All Products </h4> <div> ( Showing 20 products )</div>
          </div>
          <div className={styles.productList}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(
              (item, index) => {
                return <ProductCard key={index} />;
              }
            )}
          </div>
        </div>
      </div>
      <div className={styles.filterBtn}>
        <button
          onClick={() => {
            setShowFilter(!showFilter);
          }}
        >
          FILTER - {showFilter ? 1 : 0}
        </button>
      </div>
    </>
  );
};
