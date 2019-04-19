import Editor from "../components/editor";
import AuthPage from "../components/authpage";
import { gradient_finish } from "../utils/css";
import Page from "../components/page";
import AdminPane from "../components/adminpane";

const CenterPane = Page;

const Access = props => (
  
    <Page title={props.title} className={props.p_class} style={gradient_finish}> 
      <AuthPage><AdminPane /> </AuthPage>
    </Page>
  
);

Access.getInitialProps = async () => ({
  title: `Segur::Secure/Admin`,
  p_class: `gradient page container-fluid`
});

export default Access;
 