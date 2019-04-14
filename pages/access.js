import { Component } from "react";

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
      <div>
        Hello
        <div id="editor">{}</div>
      </div>
    );
  }
}

export default Access;
