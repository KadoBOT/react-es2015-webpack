import React from 'react';
import Comment from './comment';

const CommentForm = (props) => {
	return(
		<div className="commentForm">
			<Comment author="Pete Hunt">This is one comment</Comment>
			<Comment author="Jordan Walke">THis is *another* comment</Comment>
		</div>
	);
}

export default CommentForm;