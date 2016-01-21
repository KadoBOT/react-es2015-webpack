import React from 'react';

const Comment = (props) => {

	let rawMarkup = marked(props.children.toString(), {sanitize: true});
	
	return(
		<div className="comment">
			<h2 className="commentAuthor">
				{props.author}
			</h2>
			<span dangerouslySetInnerHTML={{__html: rawMarkup}} />
		</div>
	);
}

export default Comment;