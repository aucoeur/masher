export const INCREMENT = 'COUNTER/INCREMENT'

export const incrementAction = (index) => {
  return {
    type: INCREMENT,
    payload: index
  }
}
