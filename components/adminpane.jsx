import { Component } from "react";
import Editor from "./editor";

class AdminPane extends Component {
  constructor(props) {
    super(props);
    this.editor = <Editor />;
    this.state = { active: this.editor };
  }

  showIssues = () => {
    this.setState({
      active: (
        <div id="issues">
          <div id="issues_list">Issues Here</div>
        </div>
      )
    });
  };

  showEditor = () => {
    this.setState({ active: this.editor });
  };

  render() {
    return (
      <div id="center-alt">
        <div id="side-bar">
        <img id="" alt='logo' src="../static/img/segur_logo.svg" />
          <button
            type="button"
            className="btn btn-light"
            onClick={this.showEditor}
          >
            Add Transcript
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={this.showIssues}
          >
            View Transcript Issues
          </button>
        </div>
        {this.state.active}
      </div>
    );
  }
}

export default AdminPane;
