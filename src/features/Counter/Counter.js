import React from 'react';
import { useDispatch } from 'react-redux';
import { decrement, increment, reset } from './CounterSlice';

import './Counter.css'

function Counter(props) {
  const { index, value } = props
  const dispatch = useDispatch();

  return (
      <div>
        <h1>{value}</h1>
        <button onClick={() => dispatch(increment(index))}> + </button>
        <button onClick={() => dispatch(decrement(index))}> - </button>
        <button onClick={() => dispatch(reset(index))}>Reset</button>
      </div>
    )
}

export default Counter;
