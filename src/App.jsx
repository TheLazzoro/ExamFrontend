import { useState, useEffect } from "react";
import "./App.css";
import facade from "./facades/apiFacade";
import logo from "../src/Img/HouseRental.webp";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { linkStyle, linkStyleUnderline } from "./stylesReact";
import HomePage from "./Components/HomePage";

const Login = ({ login, loginFailed }) => {
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);

  const onKeyDown = (evt) => {
    if (evt.key === "Enter")
      performLogin(evt);
  }

  const performLogin = (evt) => {
    evt.preventDefault();
    login(loginCredentials.username, loginCredentials.password);
  };
  const onChange = (evt) => {
    setLoginCredentials({
      ...loginCredentials,
      [evt.target.id]: evt.target.value,
    });
  };

  return (
    <div>
      <header className="App-header">
        {<img src={logo} className="App-logo" alt="logo" />}
        <p>House Rental</p>
        <p></p>
        <form onChange={onChange}>
          <div>
            <input onKeyDown={onKeyDown} placeholder="Username" id="username" />
          </div>
          <div>
            <input onKeyDown={onKeyDown} placeholder="Password" type="password" id="password" />
          </div>
          <div>
            <button onClick={performLogin}>Login</button>
          </div>
        </form>
        <p id='lblError' style={{ color: loginFailed ? "#f77" : "#0000" }}>Login failed</p>
        <hr></hr>
        <Link to="/CreateAccount" style={linkStyleUnderline}>Sign up here</Link>
        <Outlet />
      </header>
    </div>
  );
};

export const LoggedIn = () => {
  const [welcomeUser, setWelcomeUser] = useState("Loading...");

  useEffect(() => {
    facade.fetchData().then((data) => {
      setWelcomeUser("Welcome, " + facade.getName());
    }).catch(e => {
      console.log(e);
    });
  }, []);

  return (
    <div>
      <h2>Rental</h2>
      <h3>{welcomeUser}</h3>
    </div>
  );
};

function App() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
  };

  const login = (user, pass) => {
    facade.login(user, pass).then((res) => {
      setLoginFailed(false);
      setLoggedIn(true)
    })
      .catch(e => {
        setLoginFailed(true);
      });
  };

  // persists login state
  useEffect(() => {
    const token = facade.getToken();
    if (token) {
      setLoggedIn(true);
    }
  }, [])

  // navigates the user back to root when not logged in
  useEffect(() => {
    if (!loggedIn)
      navigate("/");

  }, [loggedIn])

  return (
    <div className="App">
      {!loggedIn ? (<Login login={login} loginFailed={loginFailed} />) : (
        <div>
          <LoggedIn />
          <button onClick={logout}>Logout</button>

          <nav
            style={{
              borderBottom: "solid 1px",
              paddingBottom: "1rem",
            }}
          >
            <div className="link-container">
              <Link to="/Home" style={linkStyle}>Home</Link> |{" "}
              <Link to="/Houses" style={linkStyle}>Houses</Link> |{" "}
              <Link to="/Rentals" style={linkStyle}>Rental Agreements</Link> |{" "}
              <Link to="/Admin" style={linkStyle}>Admin page</Link> |{" "}
            </div>
          </nav>
          <Outlet />
        </div>
      )}
    </div>
  );
}

export default App;
