
import { Component } from "react";

class Access {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        Hello
        {props.id}
        <div id="editor">...</div>
      </div>
    );
  }
}

// Access.getInitialProps = async ({ query }) => ({ id: query.id });

export default Access;
