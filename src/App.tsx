import { StatesList } from './components/StatesList/StatesList';
import { StatesHeader } from './components/StatesHeader/StatesHeader';
import { StatesProvider } from './context/StatesContext';
import './App.css';

function App() {
  return (
    <StatesProvider>
    <div className="app">
      <header className="app-header">
        <h1>Motor.Pagination</h1>
      </header>
      <main>
     
          <StatesHeader />
          <StatesList />
       
      </main>
      
    </div>
    </StatesProvider>
  );
}

export default App;


