import React, { Component } from "react";

class Editor extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const EditorJs = '../utils/editor.js';
    console.log("done mounting");
    const editor = new EditorJs({
      holderId: "editor",
      onReady: () => console.log("editor is ready!")
    });
  }

  render() {
    return (
      <div>
        Wow
        <div id="editor">...</div>
      </div>
    );
  }
}

export default Editor;
