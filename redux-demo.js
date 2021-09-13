const redux = require('redux')

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    }
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    }
  }
  return state
}

const store = redux.createStore(counterReducer)

const counterSubscriber = () => {
  const latestState = store.getState()
  console.log(latestState)
}

store.subscribe(counterSubscriber)

store.dispatch({ type: 'increment' })
store.dispatch({ type: 'decrement' })
// now with the above in place run node redux-demo.js in terminal
// output should be { counter: 1 } because we increment
// output should be { counter: 0 } because we change state again and decreased state
