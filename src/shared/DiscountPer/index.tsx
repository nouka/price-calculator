import React from "react";
import Style from "./index.module.css";

interface Props {
  onChange(e: any): void;
  value: number;
}

const DiscountPer = (props: Props) => (
  <div className={Style.discountPer}>
    <input
      className={Style.percent}
      onChange={e => props.onChange(e.target.value)}
      type="number"
      value={props.value}
    />
    <span className={Style.suffix}>%Off</span>
  </div>
);

export default DiscountPer;
