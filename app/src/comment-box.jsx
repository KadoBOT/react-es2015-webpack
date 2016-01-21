import React from 'react';
import CommentList from './component/comment-list';
import CommentForm from './component/comment-form';

class CommentBox extends React.Component{

	constructor (props) {
	    super(props)
	    this.state = { data: [] }
	};

	componentDidMount () {
	    fetch(this.props.url)
	      .then(response => response.json())
	      .then(data => this.setState({ data }))
	      .catch(err => console.error(this.props.url, err.toString()))
	};

	render(){
		return(
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList data={this.state.data} />
				<CommentForm />
			</div>
		);
	}
}

export default CommentBox;