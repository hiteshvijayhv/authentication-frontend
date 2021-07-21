import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
   <Router>
      <div>
      <Nav />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register'component={Register} />
      </Switch>
    </div>
   </Router>
  );
}

export default App;
