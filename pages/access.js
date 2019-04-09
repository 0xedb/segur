const Access = props => (
  <div>
    Hello
    {props.id}
  </div>
);

Access.getInitialProps = async ({ query }) => ({id: query.id})

export default Access;
