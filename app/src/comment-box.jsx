import React from 'react';
import CommentList from './component/comment-list';
import CommentForm from './component/comment-form';

class CommentBox extends React.Component{
	render(){
		return(
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList data={this.props.data} />
				<CommentForm />
			</div>
		);
	}
}

export default CommentBox;