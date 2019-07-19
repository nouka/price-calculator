import React from 'react';
import './App.css';

interface Props {}
interface State {
  price: any;
}

class App extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      price: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(price: any) {
    if (price.match(/[0-9]+/) || price.length === 0) {
      this.setState({ price });
    }
  }
  render() {
    return (
      <>
        <h1>Price Calculator</h1>
        <input
          type="number"
          pattern="\d*"
          value={this.state.price}
          placeholder="ここに商品金額(税抜)を入力"
          className="price"
          onChange={e => this.handleChange(e.target.value)}
        />
        <ul>
          <Price price={this.state.price} discount={20} />
          <Price price={this.state.price} discount={30} />
          <Price price={this.state.price} discount={40} />
          <Price price={this.state.price} discount={50} />
        </ul>
      </>
    );
  }
}

interface PriceProps {
  price: number;
  discount: number;
}

const Price = (props: PriceProps) => {
  const tax = 1.08;
  return (
    <li>
      {props.discount}%Off
      <span>
        {Math.floor(props.price * (1 - props.discount / 100) * tax)}円
      </span>
    </li>
  );
};

export default App;
