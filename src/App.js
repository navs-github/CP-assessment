import './styles/output.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';
import Landing from './pages/Landing.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
