export const CHANGE_DISCOUNT_PER = "CHANGE_DISCOUNT_PER";
export const CHANGE_PRICE = "CHANGE_PRICE";
export const CHANGE_TAX = "CHANGE_TAX";
export const SWITCH_IN_TAX = "SWITCH_IN_TAX";

interface State {
  discountPer: number;
  discountPrice: number;
  inTax: boolean;
  price: any;
  tax: number;
}
export type AppState = State;

const initState: State = {
  discountPer: 20,
  discountPrice: 0,
  inTax: true,
  price: "",
  tax: 8
};

const reducer = (state: any = initState, action: any) => {
  const discountPrice = calcDiscountPrice(
    state.price,
    state.discountPer,
    state.inTax,
    state.tax
  );
  switch (action.type) {
    case CHANGE_DISCOUNT_PER:
      return Object.assign({}, state, {
        discountPer: action.percent,
        discountPrice: discountPrice
      });
    case CHANGE_PRICE:
      return Object.assign({}, state, {
        price: action.price,
        discountPrice: discountPrice
      });
    case CHANGE_TAX:
      return Object.assign({}, state, {
        tax: action.tax,
        discountPrice: discountPrice
      });
    case SWITCH_IN_TAX:
      return Object.assign({}, state, {
        inTax: !state.inTax,
        discountPrice: discountPrice
      });
  }
  return Object.assign({}, state, {
    discountPrice: discountPrice
  });
};
export default reducer;

const calcDiscountPrice = (
  price: number,
  discountPer: number,
  inTax: boolean,
  tax: number
) => {
  const purePrice = inTax ? price - (price * tax) / (100 + tax) : price;
  return (purePrice * (1 - discountPer / 100) * (tax / 100 + 1)).toFixed();
};

export const changeDiscountPer = (percent: number) => ({
  type: CHANGE_DISCOUNT_PER,
  percent
});

export const changePrice = (price: number) => ({
  type: CHANGE_PRICE,
  price
});

export const changeTax = (tax: number) => ({
  type: CHANGE_TAX,
  tax
});

export const switchInTax = () => ({
  type: SWITCH_IN_TAX
});
