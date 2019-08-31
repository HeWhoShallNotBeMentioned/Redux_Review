import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {
  INCREMENT,
  DECREMENT,
  ADDFIVE,
  MINUSFIVE,
  STORE_RESULT,
  DELETE_RESULT,
} from '../../Store/actions';

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddFiveCounter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onMinusFiveCounter}
        />
        <hr />
        <button onClick={this.props.onStoreResult}>Store Result</button>
        <ul>
          {' '}
          {this.props.storedResults.map(result => (
            <li
              key={result.id}
              onClick={() => this.props.onDeleteResult(result.id)}
            >
              {result.val}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

//Retreives state from redux store
const mapStateToProps = state => {
  return {
    ctr: state.counter,
    storedResults: state.results,
  };
};

//Sends local data back to redex store
const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: INCREMENT }),
    onDecrementCounter: () => dispatch({ type: DECREMENT }),
    onAddFiveCounter: () => dispatch({ type: ADDFIVE, value: 5 }),
    onMinusFiveCounter: () => dispatch({ type: MINUSFIVE, value: 5 }),
    onStoreResult: () => dispatch({ type: STORE_RESULT }),
    onDeleteResult: id => dispatch({ type: DELETE_RESULT, id }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
