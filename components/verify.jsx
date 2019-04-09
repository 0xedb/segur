import { Component } from "react";
import Typist from "react-typist";
import "../static/css/verify.css";

export default class Verify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showVerify: false
    };
  } 

  clickHandler() {
    console.log("hey");
    this.setState({ showVerify: this.state.showVerify ? false : true });
  }

  render() {
    if (this.state.showVerify) {
      return (
        <div>
          <i className="icon icon-link" />
          Drag Transcripts Here
          <div>
            <input type="file" id="upload" />
            <button className="btn btn-primary" typ="button">
              <i className="icon icon-upload" /> Upload from computer
            </button>
          </div>
          <button onClick={this.clickHandler.bind(this)} type="button">
            Done
          </button>
        </div>
      );
    } else
      return (
        <div>
          <img src="../static/img/segur_logo.svg" alt="logo" />
          <Typist>
            <span> Segur is Secure </span>
            <Typist.Backspace count={8} delay={200} />
            <span> King </span>
          </Typist>
          <div>
            <button id="lg_button" onClick={this.clickHandler.bind(this)} type="button">
              Show Verify
            </button>
          </div>
        </div>
      );
  }
}
