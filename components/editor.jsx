import "../static/css/editor.css";
import React, { Component } from "react";
import { database } from "../utils/firebase";
import $ from "jquery";

let ejs = () => {};
let transcript_data;

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      load: null
    };
  }

  componentDidMount() {
    const editor = require("../utils/editor");
    console.log("data", this.props.data);
    ejs = editor.EditorInit(this.props.data);
    if (!this.props.type) $("#editor").css({ pointerEvents: "none" });
  }

  finalizeTranscript = () => {
    this.saveData();
  };

  loadTranscript = () => {
    console.log("loading.....");
    let email = $("#email")
      .val()
      .replace(".", "-");
    database.ref("transcripts/" + "test").on("value", snapshot => {
      const transcript_data = snapshot.val().data;
    });
  };

  saveData = () => {
    ejs
      .save()
      .then(outputData => {
        let email = $("#email")
          .val()
          .replace(".", "-");
        let name = $("#name").val();

        if (email && name) {
          database
            .ref("transcripts/" + email)
            .set({ data: outputData, info: { name } })
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
        {this.props.loadable ? (
          <div id="editor-options">
            <div>
              <input id="email" type="email" placeholder="email" required />
            </div>
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={this.loadTranscript}
            >
              Load
            </button>
          </div>
        ) : (
          ""
        )}
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
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={this.loadTranscript}
            >
              Load
            </button>
          </div>
        )}
        <div id="editor">{}</div>
      </div>
    );
  }
}

export default Editor;
