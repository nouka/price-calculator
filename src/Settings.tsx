import React from "react";
import { connect } from "react-redux";
import TaxRate from "./shared/TaxRate/";
import { PriceCalculatorState, changeTax } from "./modules/priceCalculator";

interface Props extends PriceCalculatorState {
  dispatch(action: any): any;
}

const Settings = (props: Props) => {
  const { dispatch } = props;
  return (
    <>
      <TaxRate
        onChange={value => dispatch(changeTax(value))}
        value={props.tax}
      />
    </>
  );
};
const mapStateToProps = (state: PriceCalculatorState) => ({
  tax: state.tax
});
export default connect(mapStateToProps)(Settings);
