import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Switch
} from "@material-ui/core";

interface Props {
  inTax: boolean;
  onChange(): void;
}
const InTax = (props: Props) => {
  let label = props.inTax ? "税込" : "税抜";
  return (
    <ListItem>
      <ListItemText>{label}</ListItemText>
      <ListItemSecondaryAction>
        <Switch checked={props.inTax} onChange={() => props.onChange()} />
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default InTax;
