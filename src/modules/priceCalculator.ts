export const CHANGE_DISCOUNT_PER = "CHANGE_DISCOUNT_PER";
export const SWITCH_IN_TAX = "SWITCH_IN_TAX";
export const CHANGE_PRICE = "CHANGE_PRICE";
export const CHANGE_TAX = "CHANGE_TAX";

interface State {
  discountPer: number;
  inTax: boolean;
  price: any;
  tax: number;
}
export type PriceCalculatorState = State;

const initState: State = {
  discountPer: 20,
  inTax: true,
  price: "",
  tax: 8
};

const reducer = (state: any = initState, action: any) => {
  switch (action.type) {
    case CHANGE_DISCOUNT_PER:
      return Object.assign({}, state, {
        discountPer: action.percent
      });
    case SWITCH_IN_TAX:
      return Object.assign({}, state, {
        inTax: !state.inTax
      });
    case CHANGE_PRICE:
      if (action.price.match(/[0-9]+/) || action.price.length === 0) {
        return Object.assign({}, state, {
          price: action.price
        });
      }
    case CHANGE_TAX:
      return Object.assign({}, state, {
        tax: action.tax
      });
  }
  return state;
};
export default reducer;

export const changeDiscountPer = (percent: number) => ({
  type: CHANGE_DISCOUNT_PER,
  percent
});

export const switchInTax = () => ({
  type: SWITCH_IN_TAX
});

export const changePrice = (price: any) => ({
  type: CHANGE_PRICE,
  price
});

export const changeTax = (tax: number) => ({
  type: CHANGE_TAX,
  tax
});
