import React, {Component} from 'react';
import Comment from './Comment';

class Comments extends Component {
	constructor(props) {
		super(props);
		this.state = {
			commentText: ''
		}
	}

	inputHandler(e){
		this.setState( { commentText: e.target.value } );
	}

	clearInput() {
		this.setState( { commentText: '' } );
	}

	beforeCommentAdd() {
		if( this.state.commentText === '' ) return;
		this.clearInput();
		this.props.addComment(this.state.commentText, this.props.activeItem);
	}

	render() {
		let haveActive = false;
		if( this.props.activeItem !== -1 ) haveActive = true;

		let itemNum = '';
		let commentsList = [];
		let commentsForm = '';

		if( haveActive ){
			itemNum = `# ${this.props.activeItem + 1}`;

			let itemComments = this.props.items[this.props.activeItem].comments;

			for( let i = 0; i < itemComments.length; i++ ){
				commentsList.push(<Comment text={itemComments[i].text} key={i} />);
			}

			commentsForm = (
				<div className="comments-form">
					<div className="comment-add-img"></div> 
					<textarea value={this.state.commentText} onChange={this.inputHandler.bind(this)} /> 
					<button onClick={this.beforeCommentAdd.bind(this)} >Add Comment</button>
				</div>
			);
		}

		return (
			<div className="comments work-block">
				<div className="block-title">Comments {itemNum} </div>
				<div className="comments-list">
				{commentsList}
				</div>
				{commentsForm}
			</div>
		);
	}
}

export default Comments;