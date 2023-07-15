import React from 'react';
import './Counter.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../Redux/Slices/CounterSlice';

const Counter = () => {

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className='outer-box'>
      <button onClick={() => dispatch(increment())} className='button'>Increment</button>
      <div className='value'>{count}</div>
      <button onClick={() => dispatch(decrement())} className='button'>Decrement</button>
    </div>
  )
}

export default Counter;