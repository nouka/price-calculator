import React from "react";
import { connect } from "react-redux";
import PriceForm from "./shared/PriceForm/";
import DiscountPer from "./shared/DiscountPer/";
import DiscountPrice from "./shared/DiscountPrice/";
import {
  PriceCalculatorState,
  changeDiscountPer,
  switchInTax,
  changePrice
} from "./modules/priceCalculator";

interface Props extends PriceCalculatorState {
  dispatch(action: any): any;
}

const App = (props: Props) => {
  const { dispatch } = props;
  return (
    <>
      <PriceForm
        inTax={props.inTax}
        onChange={value => dispatch(changePrice(value))}
        onCheck={() => dispatch(switchInTax())}
        price={props.price}
      />
      <DiscountPer
        onChange={value => dispatch(changeDiscountPer(value))}
        value={props.discountPer}
      />
      <DiscountPrice
        discount={props.discountPer}
        inTax={props.inTax}
        price={props.price}
        tax={props.tax}
      />
    </>
  );
};

const mapStateToProps = (state: PriceCalculatorState) => ({
  discountPer: state.discountPer,
  inTax: state.inTax,
  price: state.price,
  tax: state.tax
});
export default connect(mapStateToProps)(App);
