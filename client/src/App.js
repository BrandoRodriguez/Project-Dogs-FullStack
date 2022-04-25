import LandingPage from './pages/LandingPage.jsx';
import Home from './pages/Home.jsx';
import Detail from './components/Details/Detail.jsx';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path= "/detail/:id" component={Detail}></Route>
      </Switch>
    </>

  );
}

export default App;
