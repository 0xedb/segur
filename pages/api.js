import Page from "../components/page";
import Stylesheet from "../utils/css"; 
import "../static/css/api.css";


const CenterPane = Page;

const Api = props => (
  <Page
    title={props.title}
    className="page container-fluid"
    style={Stylesheet.gradient_finish}
  >
    <CenterPane id="centered">
      <img
        id="center_img"
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
