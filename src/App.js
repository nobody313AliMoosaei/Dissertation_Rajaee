// react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

//CSS
import "./App.css";

//compoonents
import Home from "./pages/home";
import Layout from "./components/common/layout";
import Login from "./components/pages/auth/login";
import SignUp from "./components/pages/auth/signup";
import Student from "./pages/student";
import Supervisor from "./pages/supervisor";
import PreRegistration from "./components/pages/student/preregistration";
import ThesisStatus from "./components/pages/student/thesisstatus";
import Correspondence from "./components/pages/student/correspondence";
import Profile from "./components/pages/student/profile";
import ThesisList from "./components/pages/supervisor/thesislist";
import ThesisDetails from "./components/pages/supervisor/thesisdetails";
import News from "./pages/news";
import DetailNews from "./components/pages/news/detailNews";
import Forms from "./components/pages/student/form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<SignUp />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/detail/:id" element={<DetailNews />} />
        </Route>
        {/* route for student  */}
        <Route path="student" element={<Student />}>
          <Route path="/student" element={<Forms />} />
          <Route
            path="/student/preregistration"
            element={<PreRegistration />}
          />
          <Route path="/student/thesisstatus" element={<ThesisStatus />} />
          <Route path="/student/correspondence" element={<Correspondence />} />
          <Route path="/student/profile" element={<Profile />} />
        </Route>
        {/* route for Employees */}
        <Route path="employees" element={<Supervisor />}>
          <Route path="/employees" element={<ThesisList />} />
          <Route path="/employees/detail/:id" element={<ThesisDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
