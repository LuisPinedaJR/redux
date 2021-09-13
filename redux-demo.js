const redux = require('redux')

const counterReducer = (state = { counter: 0 }, action) => {
  return {
    counter: state.counter + 1,
  }
}

const store = redux.createStore(counterReducer)

const counterSubscriber = () => {
  const latestState = store.getState()
  console.log(latestState)
}

store.subscribe(counterSubscriber)

store.dispatch({ type: 'increment' })
// now with the above in place run node redux-demo.js in terminal
// output should be { counter: 2 }
