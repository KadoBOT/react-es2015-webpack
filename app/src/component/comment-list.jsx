import React from 'react';
import Comment from './comment';

const CommentList = (props) => {

	const data = [
	  {id: 1, author: "Pete Hunt", text: "This is one comment"},
	  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
	];
	
	return(
		<div className="commentList">
			<Comment author="Pete Hunt">This is one comment</Comment>
        	<Comment author="Jordan Walke">This is *another* comment</Comment>
		</div>
	);
}

export default CommentList;