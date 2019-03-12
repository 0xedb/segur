import Page from "../components/page";
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/css/api.css";  

const CenterPane = Page;

const Api = props => (
  <Page title={props.title} className="page container-fluid">
    <CenterPane id="centered">
      <img
        alt="api image"
        src="static/img/working.gif"
        source="https://i.imgur.com/CVpc7nD.gif"
      />
    </CenterPane>
  </Page>
);

Api.getInitialProps = async () => ({
  title: `Segur::API`
});

export default Api;
