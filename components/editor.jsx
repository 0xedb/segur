import "../static/css/editor.css";
import React, { Component } from "react";
import { database } from "../utils/firebase";
import $ from "jquery";

let ejs;
let transcript_data;
let editor;

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      load: null
    };
  }

  // componentWillMount() {
  //   editor = require("../utils/editor");
  //   ejs = editor.EditorInit(this.state.load || this.props.data);
  // }

  componentDidMount() {
    editor = require("../utils/editor");
    ejs = editor.EditorInit(this.state.load || this.props.data);
    if (!this.props.type) $("#editor").css({ pointerEvents: "none" });
  }

  finalizeTranscript = () => {
    this.saveData();
  };

  loadTranscript = () => {
    console.log("loading.....");
    $("#editor").empty();
    let email = $("#email")
      .val()
      .replace(".", "-");
    if (email) {
      database.ref("transcripts/" + email).on("value", snapshot => {
        try {
          this.setState({ load: snapshot.val().data });
        } catch (err) {
          alert("no such user");
        }
        ejs = editor.EditorInit(this.state.load);
        // $("#editor").empty();
        // ejs.clear();
        // editor.EditorInit(this.state.load || this.props.data);
        // editor.EditorInit(snapshot.val().data);
        // console.log(snapshot.val());
      });
    }
  };

  saveData = () => {
    ejs
      .save()
      .then(outputData => {
        console.log(outputData);
        let email = $("#email")
          .val()
          .replace(".", "-");
        let name = $("#name").val();

        if (email) {
          database
            .ref("transcripts/" + email)
            .set({ data: outputData, info: name })
            .then(res => {
              console.log("saving....................");
              alert("saved");
              $("#editor").empty();
              ejs = editor.EditorInit();
              // location.reload();
            })
            .catch(err => console.log(err));

          // ejs.clear();
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
