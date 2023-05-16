import styles from "./SideFilter.module.css";

export const SideFilter = () => {
  return (
    <div className={styles.sidefilter}>
      <div className={styles.top}>
        <h4>Filters</h4>
        <a>Clear</a>
      </div>
      <div className={styles.price}>
        <h5>Price</h5>
        <div class={styles.slidecontainer}>
          <input type="range" id="volume" name="volume" min="50" max="200" />
        </div>
      </div>
      <div className={styles.category}>
        <h5>Category</h5>
        <div class={styles.checkboxcontainer}>
          <div>
            <input type="checkbox" id="scales" name="scales" checked />
            <label for="scales">Men</label>
          </div>

          <div>
            <input type="checkbox" id="horns" name="horns" />
            <label for="horns">Women</label>
          </div>
        </div>
      </div>
      <div className={styles.rating}>
        <h5>Rating</h5>
        <div class={styles.radiocontainer}>
          <div>
            <input type="radio" id="huey" name="drone" value="huey" checked />
            <label for="huey">Huey</label>
          </div>

          <div>
            <input type="radio" id="dewey" name="drone" value="dewey" />
            <label for="dewey">Dewey</label>
          </div>

          <div>
            <input type="radio" id="louie" name="drone" value="louie" />
            <label for="louie">Louie</label>
          </div>
        </div>
      </div>
      <div className={styles.sortby}>
        <h5>Sort by</h5>
        <div class={styles.radiocontainer}>
          <div>
            <input type="radio" id="huey" name="drone" value="huey" checked />
            <label for="huey">Price - High to Low</label>
          </div>

          <div>
            <input type="radio" id="dewey" name="drone" value="dewey" />
            <label for="dewey">Price - Low to High</label>
          </div>
        </div>
      </div>
    </div>
  );
};
