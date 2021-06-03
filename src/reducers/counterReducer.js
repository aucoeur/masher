import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counters',
  initialState: [
    { id: 1,
      value: 0 },
    { id: 2,
      value: 5 },
  ],
  reducers: {
    increment(state, action) {
      const counter = state[action.payload]

      if (counter) {
          counter.value += 1 }
    },
    decrement(state, action) {
      const counter = state.find((counter) => counter.id === action.payload)

      if (counter) {
          counter.value -= 1 }
    },
    reset(state, action) {
      const counter = state.find((counter) => counter.id === action.payload)

      if (counter) {
        counter.value = 0
      }
    }
  },
})

export const {
  increment,
  decrement,
  reset
} = counterSlice.actions

export default counterSlice.reducer
