import React from 'react';

function Comment(props){
	return(
		<div className="comment-line">
			<div className="comment-line-img"></div>
			<p>{props.text}</p>
		</div>
	);
}

export default Comment;