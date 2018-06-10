import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionType from '../../store/actions';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAdd5} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtract5} />
                <hr/>
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.storedResults.map((result) => (
                        <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.counter,
        storedResults: state.results
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch({type: actionType.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionType.DECREMENT}),
        onAdd5:             () => dispatch({type: actionType.ADD5, value: 5}),
        onSubtract5:        () => dispatch({type: actionType.SUBTRACT5, value: 5}),
        onStoreResult:      () => dispatch({type: actionType.STORE_RESULT}),
        onDeleteResult:     (id) => dispatch({type: actionType.DELETE_RESULT, id})             
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);