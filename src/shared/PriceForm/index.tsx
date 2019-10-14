import React from "react";
import Style from "./index.module.css";

interface Props {
  inTax: boolean;
  price: number;
  onChange(e: any): void;
  onCheck(): void;
}

const PriceForm = (props: Props) => {
  let placeholder = props.inTax
    ? "ここに商品金額(税込)を入力"
    : "ここに商品金額(税抜)を入力";
  let tax = props.inTax ? "税込み" : "税抜き";
  return (
    <div style={{ padding: "2vw" }}>
      <label className={Style.taxLabel}>
        <input
          className={Style.inTaxCheck}
          checked={props.inTax}
          onChange={() => props.onCheck()}
          type="checkbox"
        />
        <span className={Style.inTax}>{tax}</span>
      </label>
      <label className={Style.priceLabel}>
        <input
          className={Style.price}
          onChange={e => props.onChange(e.target.value)}
          pattern="\d*"
          placeholder={placeholder}
          type="number"
          value={props.price}
        />
        <span className={Style.unit}>円</span>
      </label>
    </div>
  );
};

export default PriceForm;
