import Page from "../components/page";
import Login from "../components/login";
import Verify from "../components/verify";
import "bootstrap/dist/css/bootstrap.min.css";
import Stylesheet from "../utils/css";

const CenterPane = Page;
const HalfPane = Page;

const Index = props => (
  <Page
    title={props.title}
    className={props.className}
    style={Stylesheet.gradient_finish}
  >
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
  title: `Segur::Secure/Trustless/Transcript/Verification`,
  className: `gradient page container-fluid`
});

export default Index;
