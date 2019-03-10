import Page from "../components/page";
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/css/page.css";
import "../static/css/centerpane.css";
import "../static/css/halfpane.css";

const CenterPane = Page;
const HalfPane = Page;

const Index = props => (
  <Page title={props.title} className="page container-fluid">
    <CenterPane id="center">
      <HalfPane className="half">One</HalfPane>
      <HalfPane className="half">Two</HalfPane>
    </CenterPane>
  </Page>
);

Index.getInitialProps = async () => ({
  title: `Segur::Secur/Trustless/Transcript/Verification`
});

export default Index;
