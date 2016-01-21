import React from 'react';

const Comment = (props) => {
	return(
		<div className="comment">
			<h2 className="commentAuthor">
				{props.author}
			</h2>
			{props.children}
		</div>
	);
}

export default Comment;