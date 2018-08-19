import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import logo from './logo.svg';
import './App.css';
import Counter from './counter.component';
import {onIncrement, onDecrement, onIncrementAsync } from './actions/home.actions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.props.header}</h1>
        </header>
        <h1 className="App-intro">
          {this.props.count}
        </h1>
      <Counter
        value={this.props.count}
        onIncrement={() => this.props.onIncrement()}
        onDecrement={() => this.props.onDecrement()}
        onIncrementAsync={() => this.props.onIncrementAsync()}
      />
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { 
    header: state.home.header,
    count: state.home.counter
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({  
    onIncrement,
    onDecrement,
    onIncrementAsync
  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

