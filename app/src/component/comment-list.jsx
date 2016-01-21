import React from 'react';
import Comment from './comment';

const CommentList = (props) => {

	const data = [
	  {id: 1, author: "Pete Hunt", text: "This is one comment"},
	  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
	];

	const commentNodes = data.map(comment => {
		return (
			<Comment author={comment.author} key={comment.id}>
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