// react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

//CSS
import "./App.css";

//compoonents
import Home from "./pages/home";
import Layout from "./components/common/layout";
import Auth from "./pages/auth";
import Login from "./components/pages/auth/login";
import SignUp from "./components/pages/auth/signup";
import Student from "./pages/student";
import Supervisor from "./pages/supervisor";
import PreRegistration from "./components/pages/student/preregistration";
import ThesisStatus from "./components/pages/student/thesisstatus";
import Correspondence from "./components/pages/student/correspondence";
import Profile from "./components/pages/student/profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<SignUp />} />
        </Route>
        <Route path="student" element={<Student />}>
          <Route
            path="/student/preregistration"
            element={<PreRegistration />}
          />
          <Route path="/student/thesisstatus" element={<ThesisStatus />} />
          <Route path="/student/correspondence" element={<Correspondence />} />
          <Route path="/student/profile" element={<Profile />} />
        </Route>
        {/* <Route path="student/*" element={<Student />} /> */}
        <Route path="supervisor" element={<Supervisor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
