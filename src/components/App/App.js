import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "../Main/Main";
import ViewPost from "../ViewPost/ViewPost";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/posts" exact>
          <Main />
        </Route>
        <Route path="/posts/{id}">
          <ViewPost />
        </Route>
        <Route path="/">
          <Redirect to="/posts"/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
