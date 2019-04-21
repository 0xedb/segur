import Page from "../components/page";
// import Editor from "../components/editor";
import AuthPage from "../components/authpage";
import { gradient_finish } from "../utils/css";

import AdminPane from "../components/adminpane";
import StudentPane from "../components/student";
import EmployerPane from "../components/employer";

const CenterPane = Page;

const Access = props => (
  <Page title={props.title} className={props.p_class} style={gradient_finish}>
    {props.user}
    {/* <AuthPage>
      <AdminPane />{" "}
    </AuthPage> */}
    <AdminPane />
  </Page>
);

Access.getInitialProps = async ({ query }) => ({
  title: `Segur::Secure/Admin`,
  p_class: `gradient page container-fluid`,
  user: query.user
});

export default Access;
