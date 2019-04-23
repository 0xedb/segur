import { Component } from 'react';
import Editor from './editor';
import { database } from '../utils/firebase';

let transcript_data;
class StudentPane extends Component {
	constructor(props) {
		super(props);
		this.issue = null;
		database.ref('transcripts/' + props.email.replace(".", "-")).on('value', snapshot => {
			// this.props.data = snapshot.val().data;
			transcript_data = snapshot.val().data;
		});

		// console.log(transcript_data);

		this.editor = <Editor readonly="readonly" data={transcript_data} />;
		this.state = { active: this.editor };
	}

	submitIssue = () => {
		console.log(this.issue);
		alert('issue submitted');
		database
			.ref('transcripts/' + props.email)
			.set({ issue: this.issue })
			.then(res => {
				console.log('done....................');
				// location.reload();
			})
			.catch(err => console.log(err));
	};

	raiseIssues = () => {
		this.setState({
			active: (
				<div id="issues">
					<div id="issues_list">
						<textarea id="t_issue" onChange={event => (this.issue = event.target.value)} />
						<button onClick={this.submitIssue}>Submit</button>
					</div>
				</div>
			),
		});
	};

	showEditor = () => {
		this.setState({ active: this.editor });
	};

	render() {
		return (
			<div id="center-alt">
				<div id="side-bar">
					<img id="" alt="logo" src="../static/img/segur_logo.svg" />
					<button type="button" className="btn btn-light" onClick={this.showEditor}>
						View Transcript
					</button>
					<button type="button" className="btn btn-light" onClick={this.raiseIssues}>
						Raise Transcript Issues
					</button>
				</div>
				{this.state.active}
			</div>
		);
	}
}

export default StudentPane;
