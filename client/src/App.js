import Dashboard from './components/Dashboard'
import {Routes, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
         <Route path="/" element={<Dashboard/> } />
      </Routes>      
        
      </header>
    </div>
  );
}

export default App;
