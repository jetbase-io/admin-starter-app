// Style
import "./index.css";

import { Login } from "react-admin";

function LoginView() {
  return (
    <div className="v-login">
      <Login
        // A random image that changes everyday
        backgroundImage="https://source.unsplash.com/random/1600x900/daily"
        className="v-login__container"
      />
    </div>
  );
}

export default LoginView;
