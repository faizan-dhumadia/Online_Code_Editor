import logo from "./logo.svg";
import "./App.css";
import Ide from "./Screens/Ide/Ide";
import Navbar from "./Components/Navbar";
import UserState from "./context/users/UserState";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import AddQuestion from "./Screens/Admin";
import QuestionState from "./context/question/QuestionState";
import QuestionsList from "./Screens/Questions/QuestionsList";

function App() {
  return (
    <UserState>
      <div className="">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            {/* <Route exact path="/" element={<Ide />} /> */}
            <Route exact path="/addQuestion" element={<AddQuestion />} />
              
              <Route exact path="/" element={<QuestionsList />} />
              <Route exact path="/problems/:id" element={<Ide />} />
          </Routes>
          {/* <Ide /> */}
        </BrowserRouter>
      </div>
    </UserState>
  );
}

export default App;