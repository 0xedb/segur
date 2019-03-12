import Page from "../components/page";
import Login from "../components/login";
import Verify from "../components/verify";
import "bootstrap/dist/css/bootstrap.min.css";
import CSS from "../utils/css";

const CenterPane = Page;
const HalfPane = Page;

const Index = props => (
  <Page title={props.title} className="page container-fluid">
    <CenterPane id="center">
      <HalfPane className="half">
        <Verify />
      </HalfPane>
      <HalfPane className="half">
        <Login />
      </HalfPane>
    </CenterPane>
  </Page>
);

Index.getInitialProps = async () => ({
  title: `Segur::Secur/Trustless/Transcript/Verification`
});

export default Index;
