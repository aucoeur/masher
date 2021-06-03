import { configureStore } from '@reduxjs/toolkit'
import CounterList from './components/CounterList/CounterList'
import reducers from './reducers';

import './App.css';

export const store = configureStore({
  reducer: reducers
})

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <CounterList />
      </header>
    </div>

  );
}

export default App;
