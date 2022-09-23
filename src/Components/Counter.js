import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props){
        super(props);
        const {start} = props;
        this.state = {
            count:start
        }
    }
    handleUp = () => {
        this.setState({
            count: this.state.count+this.props.step
        })
    }
    handleDown = () => {
        if(this.state.count>this.props.step){
            this.setState({
                count: this.state.count-this.props.step
            })
        }
    }
  render() {
    const {count} = this.state;
    const css = {color: count>=10?'red':'initial'};
    return (
      <div>
        <h1 style={css}>Count:{count}</h1>
        <button onClick={this.handleDown}>-</button>
        <button onClick={this.handleUp}>+</button>
      </div>
    )
  }
}

export default Counter