import React from 'react';

const Comment = ({comment}) => {
	return(
		<div className="comment">
			<h2 className="commentAuthor">
				{comment.author}
			</h2>
			{comment.children}
		</div>
	);
}

export default Comment;