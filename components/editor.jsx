import "../static/css/editor.css";
import React, { Component } from "react";

let ejs = () => {};
class Editor extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const editor = require("../utils/editor");
    ejs = editor.EditorInit();
  }

  saveData = () => {
    ejs
      .save()
      .then(outputData => {
        console.log("Article data: ", outputData);
        alert("saved");
      })
      .catch(error => {
        console.log("Saving failed: ", error);
      });
  };

  render() {
    return (
      <div id="transcript">
        <div id="editor">{}</div>
        <div id="editor-options">
          <div>
            <input id="email" type="email" placeholder="email" required />
            <input id="name" type="text" placeholder="name" required />
          </div>
          <button type="button" className="btn btn-primary btn-lg" onClick={this.saveData}>
            Save
          </button>
          <button type="button" className="btn btn-primary btn-lg">
            Finalize
          </button>
        </div>
      </div>
    );
  }
}

export default Editor;
