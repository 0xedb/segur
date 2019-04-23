import { Fragment, Component } from 'react';
import { auth } from '../utils/firebase';

class AuthPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			result: null,
		};
	}

	componentDidMount() {
		if (!this.props.email || !this.props.type) {
			this.setState({ result: <Fragment>{(window.location.href = '/')}</Fragment> });
		}
		auth.fetchSignInMethodsForEmail(this.props.email)
			.then(res => {
				console.log('here');
				this.setState({
					result: res.length ? (
						<Fragment>{this.props.children}</Fragment>
					) : (
						<Fragment>{(window.location.href = '/')}</Fragment>
					),
				});
			})
			.then(console.log('Intermediate', this.result))
			.catch(err => console.log(err));
	}

	render() {
		console.log('Result', this.state.result);
		return this.state.result;
	}
}

// const AuthPage = props => {
//   let result;
//   auth
// 		.fetchSignInMethodsForEmail(props.email)
// 		.then(res => {
//       result = res.length ? <Fragment>{props.children}</Fragment> : <Fragment>{window.location.href='/'}</Fragment>
//     }).then()
// 		.catch(err => console.log(err));
// }
// auth
// 	.fetchSignInMethodsForEmail(props.email)
// 	.then()
// 	.catch(err => console.log(err));
//  auth.fetchSignInMethodsForEmail(props.email) ? props.children : (window.location.href='/')
//   return auth.currentUser ? props.children : window.location.href="/";
// <div><h1>Hmm{props.type}</h1></div>
// props.type ? props.children : (window.location.href = "/");

// AuthPage.getInitialProps = async ({query}) => { console.log(query);return{
//   type: query.type,
//   email: query.email
// }};

// if (res.length) <Fragment>{props.children}</Fragment>;
// 			else return <div>{window.location.href = '/'}</div>;

// (res.length ? props.children : (window.location.href = '/'))

export default AuthPage;
