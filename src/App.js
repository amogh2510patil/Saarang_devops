import Header from "./component/Header"
import { useState } from 'react'
import Login from "./component/Login";
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Lastpage from "./component/Lastpage";

function App() {
  let [usern,settingUser] = useState("")
  function getDetails(user){
    settingUser(usern=user);
  }

  return (
    <Router>
      <div>
        <switch>
          <Route exact path="/">
            {/* Front page */}
            <div className="centralDiv">
              <Header/>
              <Login getDetail = {getDetails}/>
            </div>
          </Route>
          {/* Last page */}
          <Route path="/lastpage">
            <div className="centralDiv2">
              <Header/>
              <Lastpage userName = {usern}/>
            </div>
          </Route>
        </switch>
      </div>
    </Router>
  );
}

export default App;
