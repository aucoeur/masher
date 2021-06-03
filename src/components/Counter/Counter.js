import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../../reducers/counterReducer';

import './Counter.css'

function Counter(props) {
  const id = props
  // const count = useSelector(state => state.counters)

  const dispatch = useDispatch();


  return (
      <div>
        <h1>{id}</h1>
        <button onClick={dispatch(increment(id))}> + </button>
        <button onClick={dispatch(decrement(id))}> - </button>
        <button onClick={dispatch(reset(id))}>Reset</button>
      </div>
    )
}

export default Counter;
