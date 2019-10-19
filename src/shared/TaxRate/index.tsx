import React from "react";
import {
  Input,
  InputAdornment,
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from "@material-ui/core";

interface Props {
  value: number;
  onChange(e: any): void;
}
const TaxRate = (props: Props) => {
  const tax = props.value === 0 ? "" : Number(props.value);
  const handleChange = (tax: string) => {
    props.onChange(Number(tax));
  };
  return (
    <ListItem>
      <ListItemText>税率</ListItemText>
      <ListItemSecondaryAction>
        <Input
          endAdornment={<InputAdornment position="end">%</InputAdornment>}
          inputProps={{
            min: 0,
            type: "number"
          }}
          onChange={e => handleChange(e.target.value)}
          value={tax}
        />
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TaxRate;
