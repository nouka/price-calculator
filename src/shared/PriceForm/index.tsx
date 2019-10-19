import React from "react";
import {
  Input,
  InputAdornment,
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from "@material-ui/core";

interface Props {
  inTax: boolean;
  price: number;
  onChange(price: number): void;
}

const PriceForm = (props: Props) => {
  const label = props.inTax ? "商品価格(税込)" : "商品価格(税抜)";
  const price = props.price === 0 ? "" : Number(props.price);
  const handleChange = (price: string) => {
    props.onChange(Number(price));
  };
  return (
    <ListItem>
      <ListItemText>{label}</ListItemText>
      <ListItemSecondaryAction>
        <Input
          endAdornment={<InputAdornment position="end">円</InputAdornment>}
          fullWidth
          inputProps={{
            min: 0,
            type: "number"
          }}
          onChange={e => handleChange(e.target.value)}
          placeholder={label}
          value={price}
        />
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default PriceForm;
