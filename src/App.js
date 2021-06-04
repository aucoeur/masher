import CounterList from './features/Counter/CounterList'

import './App.css';

// export const store = configureStore({
//   reducer: reducers
// })

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
