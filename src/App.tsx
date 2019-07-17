import React from 'react';
import './App.css';

interface Props {}
interface State {
  price: number;
}

class App extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      price: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(price: any) {
    this.setState({ price });
  }
  render() {
    return (
      <>
        商品金額:
        <input
          type="text"
          value={this.state.price}
          onChange={e => this.handleChange(e.target.value)}
        />
        <ul>
          <li>20%引き：{Math.floor(this.state.price * 0.8 * 1.08)}円</li>
          <li>30%引き：{Math.floor(this.state.price * 0.7 * 1.08)}円</li>
          <li>40%引き：{Math.floor(this.state.price * 0.6 * 1.08)}円</li>
          <li>50%引き：{Math.floor(this.state.price * 0.5 * 1.08)}円</li>
        </ul>
      </>
    );
  }
}

export default App;
