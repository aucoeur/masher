import { useSelector } from 'react-redux'

import Counter from './Counter'
import NewCounter from './newCounter'

function CounterList() {

  const counters = useSelector(state => state.counters)

  const counterList = counters.map((counter, index) => {
    return <Counter key={index} index={index} value={counter.value}/>
  })

  const total = counters.reduce((total, counter) => total + counter.value, 0)

  return (
    <>
    <NewCounter />
    <h1>Total Clicks: {total}</h1>
    {counterList}
    </>
  )
}

export default CounterList
