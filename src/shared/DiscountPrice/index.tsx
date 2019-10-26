import React from "react";
import { TextField, InputAdornment, ListItem } from "@material-ui/core";

interface Props {
  discountPrice: number;
}

const DiscountPrice = (props: Props) => (
  <ListItem>
    <TextField
      fullWidth
      InputProps={{
        endAdornment: <InputAdornment position="end">円</InputAdornment>,
        readOnly: true
      }}
      value={props.discountPrice}
      variant="outlined"
    />
  </ListItem>
);

export default DiscountPrice;
