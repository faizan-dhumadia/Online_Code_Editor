import logo from "./logo.svg";
import "./App.css";
import Ide from "./Screens/Ide/Ide";
import NewNavBar from "./Components/NewNavBar";
import UserState from "./context/users/UserState";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Signup from './Components/Signup';
import Login from './Components/Login';
import Main from './Components/Main'
import Footer from './Components/Footer'

function App() {
  return (
    <UserState>
      <div className="">
        <BrowserRouter>
          <NewNavBar />
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/" element={<Main />} />
          </Routes>
          {/* <Ide /> */}
          <Footer/>
        </BrowserRouter>
      </div>
    </UserState>
  );
}

export default App;
