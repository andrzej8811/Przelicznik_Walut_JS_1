import React from "React";
import Offer1 from "./Offer1";
import Offer2 from "./Offer2";
import Offer3 from "./Offer3";
import Offer4 from "./Offer4";
import Offer5 from "./Offer5";
import Offer6 from "./Offer6";

const items = [Offer1, Offer2, Offer3, Offer4, Offer5, Offer6];

function Offer({ items }) {
  return (
    <ol>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ol>
  );
}

export default Offer;
