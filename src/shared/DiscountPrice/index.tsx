import React from "react";
import { TextField, InputAdornment, ListItem } from "@material-ui/core";

interface Props {
  inTax: boolean;
  discount: number;
  price: number;
  tax: number;
}

const DiscountPrice = (props: Props) => {
  const fixedNumber = (number: any) => parseInt(Math.round(number).toFixed(), 10);
  const purePrice = props.inTax
    ? fixedNumber(props.price - (props.price * props.tax) / (100 + props.tax))
    : props.price;
  const tax = props.tax / 100 + 1;
  const discountPrice = fixedNumber(purePrice * (1 - props.discount / 100) * tax);
  return (
    <ListItem>
      <TextField
        fullWidth
        InputProps={{
          endAdornment: <InputAdornment position="end">円</InputAdornment>,
          readOnly: true
        }}
        value={discountPrice}
        variant="outlined"
      />
    </ListItem>
  );
};

export default DiscountPrice;
