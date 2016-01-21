import React from 'react';
import CommentList from './component/comment-list';
import CommentForm from './component/comment-form';

class CommentBox extends React.Component{

	constructor (props) {
	    super(props)
	    this.state = { data: [] }
	};

	handleCommentSubmit(comment){
		let comments = this.state.data;
		comment.id = Date.now();

		let newComments = comments.concat([comment]);
		this.setState({data: newComments});
		
		fetch(this.props.url, {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(comment)
		})
		.then(response => response.json())
		.then(data => this.setState({data}))
		.catch(err => console.error(this.props.url, err.toString()))
	};

	loadComments () {
	    fetch(this.props.url)
	      .then(response => response.json())
	      .then(data => this.setState({ data }))
	      .catch(err => console.error(this.props.url, err.toString()))
	};

	componentDidMount () {
	    this.loadComments()
	    setInterval(() => this.loadComments(), this.props.pollInterval);
	};

	render(){
		return(
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList data={this.state.data} />
				<CommentForm onCommentSubmit={this.handleCommentSubmit} />
			</div>
		);
	}
}

export default CommentBox;
