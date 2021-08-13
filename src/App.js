import NavBar from './components/NavBar';
import Profile from './components/Profile/Profile';
import Locate from './components/Locate/Locate';
import Explore from './components/Explore/Explore';
import Book from './components/Profile/Book';
import Subscriptions from './components/Subscriptions/Subscriptions'
import Store from './components/Subscriptions/Store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './styles/App.css';
import Recommendations from './components/Recommendations/Recommendations';
import Empathy from './components/Subscriptions/Empathy';

function App() {
  return (
    <div className="App">
        <Router>
            <NavBar />
            <Switch>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/recommendations">
                    <Recommendations />
                </Route>
                <Route path="/explore">
                    <Explore />
                </Route>
                <Route path="/locate">
                    <Locate />
                </Route>
                <Route path="/book">
                    <Book />
                </Route>
                <Route path="/subscriptions">
                    <Subscriptions/>
                </Route>
                <Route path="/store">
                    <Store />
                </Route>
                <Route path="/empathy">
                    <Empathy />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
