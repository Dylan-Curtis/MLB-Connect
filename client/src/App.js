import Dashboard from './components/Dashboard'
// import NavBar from './components/NavBar'
import {Routes, Route} from 'react-router-dom'
import './App.css';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
      <header className="App-header">
      <BrowserRouter>    
        <Routes>
           <Route path="/" element={<Dashboard/> } />
        </Routes>      
      </BrowserRouter>,
      </header>
    </div>
  );
}

export default App;
