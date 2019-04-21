import "../static/css/editor.css";
import React, { Component } from "react";
import { database } from "../utils/firebase";
import $ from "jquery";

let ejs = () => {};
class Editor extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const editor = require("../utils/editor");
    console.log('data', this.props.data);
    ejs = editor.EditorInit(this.props.data);
    $("#editor").css({pointerEvents:'none'});
  }

  finalizeTranscript = () => {
    this.saveData();
  };

  saveData = () => {
    ejs
      .save()
      .then(outputData => {
        let email = $("#email").val();
        let name = $("#name").val();

        if (email && name) {
          database
            .ref("transcripts/" + "test")
            .set({ data: outputData, info: {email, name} })
            .then(alert("saved"))
            .catch(err => console.log(err));

          ejs.clear();
        }
 
      })
      .catch(error => {
        console.log("Saving failed: ", error);
      });
  };

  render() {
    return (
      <div id="transcript">
        <div id="editor">{}</div>
        {this.props.readonly ? (
          ""
        ) : (
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
        )}
      </div>
    );
  }
}

export default Editor;
