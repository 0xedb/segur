import { gradient_finish } from "../utils/css";
import Page from "../components/page";
import Login from "../components/login";
import Verify from "../components/verify";

const CenterPane = Page;
const HalfPane = Page;

const Index = props => (
  <Page title={props.title} className={props.p_class} style={gradient_finish}>
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
  p_class: `gradient page container-fluid`
});

export default Index;
