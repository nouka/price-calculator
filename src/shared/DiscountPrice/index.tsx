import React from "react";
import { TextField, InputAdornment, ListItem } from "@material-ui/core";

interface Props {
  inTax: boolean;
  discount: number;
  price: number;
  tax: number;
}

const DiscountPrice = (props: Props) => {
  let purePrice = props.inTax
    ? props.price - (props.price * props.tax) / (100 + props.tax)
    : props.price;
  let tax = props.tax / 100 + 1;
  let discountPrice = purePrice * (1 - props.discount / 100);
  return (
    <ListItem>
      <TextField
        fullWidth
        InputProps={{
          endAdornment: <InputAdornment position="end">円</InputAdornment>,
          readOnly: true
        }}
        value={Math.floor(discountPrice * tax)}
        variant="outlined"
      />
    </ListItem>
  );
};

export default DiscountPrice;
