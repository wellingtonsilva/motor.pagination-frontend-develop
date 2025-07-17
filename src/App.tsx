import { StatesList } from './components/StatesList/StatesList';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Motor.Pagination</h1>
      </header>
      <main>
        <StatesList />
      </main>
    </div>
  );
}

export default App;

