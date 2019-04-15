import { Component } from "react";
import "../static/css/editor.css";

class Access extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const editor = require("../utils/editor");
    editor.EditorInit();
  }

  render() {
    return (
      <div id="transcript"> 
        <div id="editor">{}</div>
      </div>
    );
  }
}

export default Access;
