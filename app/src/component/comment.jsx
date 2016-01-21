import React from 'react';

const Comment = (props) => {
	return(
		<div className="comment">
			<h2 className="commentAuthor">
				{props.author}
			</h2>
			{marked(props.children.toString())}
		</div>
	);
}

export default Comment;