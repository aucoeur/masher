import { createSlice } from '@reduxjs/toolkit'

// Using redux toolkit createSlice
const counterSlice = createSlice({
  name: 'counters',
  initialState: [
    {value: 0},
    {value: 2},
    {value: 4}
  ],
  reducers: {
    increment: (state, action) => {
      state[action.payload].value += 1
    },
    decrement: (state, action) => {
      state[action.payload].value -= 1
    },
    reset: (state, action) => {
      state[action.payload].value = 0
    },
    createCounter: (state, action) => {
      state.push(
        {value: 0}
      )
    }
  },
})

const { actions, reducer } = counterSlice

export const {
  increment,
  decrement,
  reset,
  createCounter
} = actions

export default reducer
