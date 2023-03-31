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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<SignUp />} />
        </Route>
        <Route path="student/*" element={<Student />} />
        <Route path="supervisor" element={<Supervisor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
