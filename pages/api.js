import Page from "../components/page";
import "bootstrap/dist/css/bootstrap.min.css";
import '../static/css/api.css';

const Api = props => (
  <Page title={props.title} className="page container-fluid">
    <img alt="api image" src="static/img/working.gif" source='https://i.imgur.com/CVpc7nD.gif' />
  </Page>
);

Api.getInitialProps = async () => ({
  title: `Segur::API`
});

export default Api;
