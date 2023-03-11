import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { BackgroundProvider } from "./components/Context/BackgroundContext.js"
import { RetryProvider } from './components/Context/RetryContext';

ReactDOM.render(
  <BackgroundProvider>
    <RetryProvider>
    <BrowserRouter>
      <App/>
    </BrowserRouter> 
    </RetryProvider>
  </BackgroundProvider>,
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
