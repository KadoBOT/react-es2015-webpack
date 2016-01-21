import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './src/comment-box';

ReactDOM.render(<CommentBox url="./app/src/comments.json" />, document.getElementById('content'));