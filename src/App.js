import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, login } from './actions'

function App() {

  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.logged)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter {counter}</h1>
        <button onClick={() => dispatch(increment(5))}>+</button>
        <button onClick={() => dispatch(decrement(5))}>-</button>

        <h2>Logged in: {isLogged.toString()}</h2>
        <button onClick={() => dispatch(login())}>
          {isLogged ? 'Log out' : 'Log in'}
        </button>
        {isLogged && <p><strong>Secret information</strong></p>}

      </header>
    </div>
  );
}

export default App;
