import { Component } from "react";

export default class Verify extends Component {
  constructor(props) {
    super(props);
    this.state({ showVerify: false });
  }

  render() {
    return this.state.showVerify ? "verify" : "default";
  }
}

const showVerify = () => {
  this.setState({showVerify: })
};


/**
 * 
 *  1. take a function as prop
 * 
 * 
 */