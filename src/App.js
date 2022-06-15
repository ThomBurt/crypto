import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Crypto from './pages/Crypto/Crypto';

function App() {
  return (
    <div className="App">
      <Router>
          <NavBar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/home' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/crypto' exact component={Crypto} />
          </Switch>
      </Router>

    </div>
  );
}

export default App;
