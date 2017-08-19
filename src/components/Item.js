import React from 'react';

function Item(props) {
	return (
		<div className={ `item ${props.addClass}` } onClick={(e) => { if( e.target.tagName !== 'BUTTON' ) props.click()} }>
			<div className="item-name-wr" >
				<p>{props.name}</p>
				<span>{props.commentsCount}</span>
			</div>
			<div className="item-btn-wr">
				<button onClick={ () => props.rmItem(props.id) }>Delete</button>
			</div>
		</div>
	);
}

export default Item;