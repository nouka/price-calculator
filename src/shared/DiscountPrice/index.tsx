import React from "react";
import Style from "./index.module.css";

interface Props {
  inTax: boolean;
  discount: number;
  price: number;
  tax: number;
}

const DiscountPrice = (props: Props) => {
  let tax = 1 + props.tax / 100;
  let price = props.inTax ? props.price / tax : props.price;
  return (
    <p className={Style.discountPrice}>
      <strong className={Style.discountPriceValue}>
        {Math.floor(price * (1 - props.discount / 100) * tax)}
      </strong>
      円
    </p>
  );
};

export default DiscountPrice;
