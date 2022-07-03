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
import QuestionDescription from "./Screens/Questions/QuestionDescription";

function App() {
  return (
    <UserState>
      <QuestionState>
        <div className="">
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
              {/* <Route exact path="/" element={<Ide />} /> */}
              <Route exact path="/addQuestion" element={<AddQuestion />} />

              <Route exact path="/" element={<QuestionsList />} />
              {/* <Route exact path="/:id" element={<Ide />} /> */}
              <Route exact path="/:id" element={<QuestionDescription />} />
            </Routes>
            {/* <Ide /> */}
          </BrowserRouter>
        </div>
      </QuestionState>
    </UserState>
  );
}

export default App;