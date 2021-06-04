import { useDispatch } from 'react-redux'
import { createCounter } from './CounterSlice'

function NewCounter() {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(createCounter())}>Add New Counter</button>
  )
}
export default NewCounter;
