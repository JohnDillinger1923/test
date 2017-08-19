import React, { Component } from 'react';
import Items from './Items';
import Comments from './Comments';
import Sidebar from './Sidebar';

class App extends Component {
  componentDidUpdate() {
    localStorage.setItem( '_localStore', JSON.stringify( this.props.store ) );
  }
  render() {
    
    return (
      <div className="container app">
          <div className="sidebar-wr">
            <Sidebar />
          </div>
          <div className="work-blocks-wr">
            <Items items={this.props.store.items} activeItem={this.props.store.activeItem} choseActiveItem={this.props.choseActiveItem} addItem={this.props.addItem} rmItem={this.props.removeItem} />
            <Comments activeItem={this.props.store.activeItem} items={this.props.store.items} addComment={this.props.addComment} />
          </div>
      </div>
    );
  }
}

export default App;