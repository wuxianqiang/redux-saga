import React, { Component } from 'react';
import { connect } from 'react-redux'
import action from './store/action'

class App extends Component {
  asyncAdd = () => {
    this.props.asyncIncrement(this.props.number + 1)
  }

  render() {
    return (
      <>
        <div>
          {this.props.number}
        </div>
        <button onClick={this.asyncAdd}>点击</button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, action)(App);
