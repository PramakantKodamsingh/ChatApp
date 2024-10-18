import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./App.css";
// import Spinner from "./components/Spinner";
// import RouteProtected from "./components/RouteProtected";
import HomePage from "./pages/homepage/HomePage";
// import RoutePublic from "./components/RoutePublic";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import Messenger from "./pages/messenger/Messenger";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import RoutePublic from "./components/RoutePublic";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <RoutePublic>
              <Login />
            </RoutePublic>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={user ? <HomePage /> : <Login />} />
        <Route path="/messenger" element={user ? <Messenger /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;
