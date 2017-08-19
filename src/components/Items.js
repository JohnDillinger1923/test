import React, {Component} from 'react';
import Item from './Item';

class Items extends Component{
	constructor(props) {
		super(props);
		this.state = {
			newItemName: ''
		}
	}

	inputHandler(e) {
		this.setState( { newItemName: e.target.value } );
	}

	clearInput() {
		this.setState( { newItemName: '' } );
	}

	beforeItemAdd() {
		if( this.state.newItemName === '' ) return;
		this.clearInput();
		this.props.addItem(this.state.newItemName);
	}

	render() {
		let itemList = [];

		for( let i = 0; i < this.props.items.length; i++ ){
			let additionalClassName = '';
			
			if( this.props.activeItem === i ) additionalClassName = 'active';
			else additionalClassName = '';

			itemList.push(<Item addClass={additionalClassName} click={ () => this.props.choseActiveItem(i) } name={this.props.items[i].name} commentsCount={this.props.items[i].comments.length} rmItem={this.props.rmItem} id={i} key={i} />);
		}

		return(
			<div className="items work-block">
				<h1 className="block-title">Items</h1>
				<div className="items-form-wr">
					<input placeholder="Type name here..." value={this.state.newItemName} onChange={this.inputHandler.bind(this)} />
					<button onClick={this.beforeItemAdd.bind(this)} >Add new</button>
				</div>
				<div className="items-list">
					{ itemList }
				</div>
			</div>
		);
	}
}

export default Items;