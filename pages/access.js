import Editor from "../components/editor";

const Access = props => (
  <div>
    Hello
    {props.id}
    <Editor />
  </div>
);

Access.getInitialProps = async ({ query }) => ({ id: query.id });

export default Access;
