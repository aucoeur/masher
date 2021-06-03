import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { addCounter } from '../../reducers/counterReducer'
import Counter from '../Counter/Counter'

function CounterList() {
  // const counters = useSelector(state => state.counters)
  const [total, setTotal] = useState(3)
  let counters = [0,1,2]

  const counterList = counters.forEach(counter =>{
      return
    })
    console.log(counterList)

  return (
    <>
    <button onClick={dispatch(addCounter(total))} />
    <h1>Total Clicks: 0</h1>
    {counterList}
    </>
  )
}

export default CounterList
