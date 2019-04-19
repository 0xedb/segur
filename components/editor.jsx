import "../static/css/editor.css";
import React, { Component } from "react";
import { firestore } from "../utils/firebase";

let ejs = () => {};
class Editor extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const editor = require("../utils/editor");
    ejs = editor.EditorInit();
  }

  finalizeTranscript = () => {
    this.saveData();
  };

  saveData = () => {
    ejs
      .save()
      .then(outputData => {
        console.log("Article data: ", outputData);
        firestore
          .collection("transcript")
          .doc("student")
          .set({
            data: outputData
          });
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
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={this.saveData}
            hidden
          >
            Save
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={this.finalizeTranscript}
          >
            Finalize
          </button>
        </div>
      </div>
    );
  }
}

export default Editor;
