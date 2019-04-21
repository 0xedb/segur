import { Component } from "react";
import Editor from "./editor";

class EmployerPane extends Component {
  constructor(props) {
    super(props);
    this.editor = <Editor readonly="readonly"  />; 
  }

  render() {
    return (
      <div id="center-alt">
        <div id="side-bar">
          <img id="" alt="logo" src="../static/img/segur_logo.svg" />
          {/* <button
            type="button"
            className="btn btn-light"
            onClick={this.showEditor}
          >
            View Transcript
          </button> */}
        </div> 
        {this.editor}
      </div>
    );
  }
}

export default EmployerPane;
