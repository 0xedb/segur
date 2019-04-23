import Page from '../components/page';
import AuthPage from '../components/authpage';
import { gradient_finish } from '../utils/css';

import AdminPane from '../components/adminpane';
import StudentPane from '../components/student';
import EmployerPane from '../components/employer';

const CenterPane = Page;

const userComponent = (type, email) => {
	switch (type) {
		case 'admin':
			return <AdminPane />;
			break;
		case 'student':
			return <StudentPane email={email} />;
			break;
		case 'employer':
			return <EmployerPane />;
			break;
		default:
			return <div>Don't know you</div>;
			break;
	}
};

const Access = props => (
	<Page title={props.title} className={props.p_class} style={gradient_finish}>
		{console.log(props.email, props.type)}
		<AuthPage email={`${props.email}`} type={`${props.type}`}>
			{userComponent(props.type, props.email.replace(".", "-"))}
		</AuthPage>
	</Page>
);

Access.getInitialProps = async ({ query }) => ({
	title: `Segur::Secure/Admin`,
	p_class: `gradient page container-fluid`,
	email: query.email,
	type: query.type,
});

export default Access;

// // <Page title={props.title} className={props.p_class} style={gradient_finish}>
//     // {props.user}
//     //  <AuthPage />

//     // </AuthPage>
//     // <AdminPane />
//   {/* </Page> */}
