import React from "react";
import { connect } from "react-redux";
import { List } from "@material-ui/core";
import PriceForm from "./shared/PriceForm/";
import DiscountPer from "./shared/DiscountPer/";
import DiscountPrice from "./shared/DiscountPrice/";
import { AppState, changeDiscountPer, changePrice } from "./modules/";

interface Props extends AppState {
  dispatch(action: any): any;
}

const App = (props: Props) => {
  const { dispatch } = props;
  return (
    <List>
      <PriceForm
        inTax={props.inTax}
        onChange={value => dispatch(changePrice(value))}
        price={props.price}
      />
      <DiscountPer
        onChange={value => dispatch(changeDiscountPer(value))}
        value={props.discountPer}
      />
      <DiscountPrice discountPrice={props.discountPrice} />
    </List>
  );
};

const mapStateToProps = (state: AppState) => ({
  discountPer: state.discountPer,
  discountPrice: state.discountPrice,
  inTax: state.inTax,
  price: state.price,
  tax: state.tax
});
export default connect(mapStateToProps)(App);
