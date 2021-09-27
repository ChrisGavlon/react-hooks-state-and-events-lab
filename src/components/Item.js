import React, {useState} from "react";

function Item({ name, category }) {
  const [InOrNot, setInOrNot] = useState(null)
  function addToCart(){
   !InOrNot ? setInOrNot("in-cart") : setInOrNot(null);
  }

  return (
    <li className={InOrNot}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>{!InOrNot? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
