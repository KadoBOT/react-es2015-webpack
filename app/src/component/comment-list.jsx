import React from 'react';
import Comment from './comment';

const CommentList = (props) => {

	const commentNodes = props.data.map((comment, id) => {
		return (
			<Comment author={comment.author} key={id}>
				{comment.text}
			</Comment>
		);
	});

	return(
		<div className="commentList">
			{commentNodes}
		</div>
	);
}

export default CommentList;