import { Component } from "react";
import Typist from 'react-typist'; 
import '../static/css/verify.css';

export default class Verify extends Component {
  state = { showVerify: false };

  clickHandler() {
    this.setState({ showVerify: true });
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
            <button clickHandler={this.clickHandler} type="button">
              Show Verify
            </button>
          </div>
        </div>
      );
  }
}
