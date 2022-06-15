import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Crypto from './pages/Crypto/Crypto';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Router>
            <NavBar />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/home' exact component={Home} />
              <Route path='/about' exact component={About} />
              <Route path='/crypto' exact component={Crypto} />
              <Route path='/login' exact component={Login} />
              <Route path='/signup' exact component={Signup} />
            </Switch>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
