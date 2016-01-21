import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './src/comment-box';

ReactDOM.render(<CommentBox url="./app/src/comments.json" pollInterval={2000} />, document.getElementById('content'));