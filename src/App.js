import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Pages/Home";
import ResetPassword from "./Pages/ResetPassword";
import ForgotPassowrd from "./Pages/ForgotPassowrd";
import Login from "./Pages/Login";
import SignUp from "./Pages/Signup";
import PostJob from "./Pages/PostJob";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/postJob" component={PostJob} />
        <Route path="/forgotPassword" component={ForgotPassowrd} />
        <Route path="/resetPassword" component={ResetPassword} />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
