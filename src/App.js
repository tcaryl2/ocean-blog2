//import './App.css';
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  const title = "Welcome to the Ocean Blog"
  const likes = 50;
  const person = {name: 'Pelagio', age: 24}
  const link = "https://en.wikipedia.org/wiki/Archipelago"
  const link_name = "Wikipedia's Archipelago page"
  const my_const = 3

  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/create"> 
            <Create/>
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
