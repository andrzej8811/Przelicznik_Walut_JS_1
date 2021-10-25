import React from "React";
import Offers from "./Offer";

const items = [Offers];

function Offer({ items }) {
  return (
    <ol>
      {items.map((item, index) => <Offer key={index} {...item} />)}
    </ol>
  );
}

export default Offer;
