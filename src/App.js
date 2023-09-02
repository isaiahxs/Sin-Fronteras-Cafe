import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main/Main.js';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;
