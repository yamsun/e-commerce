import { useEffect, useState } from "react";
import { Navbar } from "../../layout/Navbar";
import styles from "./ProductPage.module.css";
import { ProductCard } from "./components/ProductCard.js";
import { SideFilter } from "./components/SideFilter";
import axios from "axios";

export const ProductPage = () => {
  const [showFilter, setShowFilter] = useState(false);

  const [productData, setProductData] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`/api/products`);
      setProductData(res?.data?.products);
    } catch (error) {
      console.log("get ProductData error", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className={styles.page}>
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
            {[...productData, ...productData].map((item, index) => {
              return <ProductCard product={item} key={item?._id} />;
            })}
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
