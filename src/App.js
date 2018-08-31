import React, { Component } from 'react';
/*
*  引入的模块是否需要用{}包裹，取决于该模块被导出时是否默认导出
*  比如这里的 App 使用export default 默认导出， 在其他地方需要引入App时，则不需要{}包裹
*/
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };
  }

  add() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button type="button" onClick={() => this.add()}> 加一 </button>
        <div>test-change12299992</div>
      </div>
    );
  }
}
