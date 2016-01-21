import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './src/comment-box';

ReactDOM.render(<CommentBox url="/src/comments.json" />, document.getElementById('content'));