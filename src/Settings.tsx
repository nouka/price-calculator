import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { List, ListItem, Button } from "@material-ui/core";
import TaxRate from "./shared/TaxRate/";
import InTax from "./shared/InTax/";
import { AppState, changeTax, switchInTax } from "./modules/";

interface Props extends AppState {
  dispatch(action: any): any;
}

const Settings = (props: Props) => {
  const { dispatch } = props;
  return (
    <List>
      <TaxRate
        onChange={value => dispatch(changeTax(value))}
        value={props.tax}
      />
      <InTax onChange={() => dispatch(switchInTax())} inTax={props.inTax} />
      <ListItem>
        <Button variant="contained">
          <Link to="/">戻る</Link>
        </Button>
      </ListItem>
    </List>
  );
};
const mapStateToProps = (state: AppState) => ({
  tax: state.tax,
  inTax: state.inTax
});
export default connect(mapStateToProps)(Settings);
