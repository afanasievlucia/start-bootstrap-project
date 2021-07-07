import NavBar from './components/Navigation-bar';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import MyPosts from './pages/MyPosts';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/' component= {Home} />
        <Route path='/about' component= {About} />
        <Route path='/posts' component={MyPosts} />
        <Route path='/contact' component={Contact } />
      </Switch>     
      <Footer />
    </Router>
  );
}

export default App;
