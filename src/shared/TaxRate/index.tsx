import React from "react";
import Style from "./index.module.css";

interface Props {
  value: number;
  onChange(e: any): void;
}
const TaxRate = (props: Props) => (
  <>
    <label className={Style.label}>
      <span className={Style.prefix}>税率</span>
      <input
        className={Style.input}
        onChange={e => props.onChange(e.currentTarget.value)}
        type="number"
        value={props.value}
      />
      <span className={Style.suffix}>%</span>
    </label>
  </>
);

export default TaxRate;
