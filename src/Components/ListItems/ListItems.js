import React from "react";
import { products } from "../Data/Data.js";
import { HasExpired } from "../ListItems/ItemDate.js";

const prods = products.filter((p) => p.id >= 1);
const styles = {
  container: {
    position: "relative",
    display: "flex",
  },
  img: {
    width: "200px",
  },
};
const listItems = prods
  .filter((p) => p.id >= 1)
  .map((product) => (
    <div style={styles.container}>
      <div>
        <img style={styles.img} alt={product.name} src={product.img} />
        <HasExpired expireDate={product.expireDate} />
      </div>
      <div>
        <h1>{product.name}</h1>
        <h3>{product.description}</h3>
        <h3>{product.price}$</h3>
      </div>
    </div>
  ));

export default function ListItems() {
  return (
    <div>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: 0,
          margin: 50,
          listStyleType: "none",
        }}
      >
        {listItems}
      </ul>
    </div>
  );
}
