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
    const tax = 1.08;
    return (
      <>
        <h1>商品金額計算機</h1>
        <input
          type="number"
          value={this.state.price}
          placeholder="ここに商品金額(税抜)を入力してください。"
          className="price"
          onChange={e => this.handleChange(e.target.value)}
        />
        <ul>
          <li>
            20%引き<span>{Math.floor(this.state.price * 0.8 * tax)}円</span>
          </li>
          <li>
            30%引き<span>{Math.floor(this.state.price * 0.7 * tax)}円</span>
          </li>
          <li>
            40%引き<span>{Math.floor(this.state.price * 0.6 * tax)}円</span>
          </li>
          <li>
            50%引き<span>{Math.floor(this.state.price * 0.5 * tax)}円</span>
          </li>
        </ul>
      </>
    );
  }
}

export default App;
