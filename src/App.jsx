import "./App.css";
import PaginationCom from "./components/pagination/PaginationCom";
import SearchInput from "./components/search-input/SearchInput";
import Counter from "./components/two-counter/Counter";
import BgChanger from "./components/bg-changer/BgChanger";
import PasswordGenrator from "./components/password-genrator/PasswordGenrator";
import AuthAuthorization from "./components/authentication/AuthAuthorization";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/authentication/Home";
import Profile from "./components/authentication/Profile";
import Header from "./components/authentication/Header";
import ProtectedRoute from "./components/authentication/ProtectedRoute";

function App() {
  return (
    <>
      {/* Search input Component */}
      {/* <SearchInput /> */}

      {/* Pagination Component */}
      {/* <PaginationCom /> */}

      {/* Why you need hooks and project */}
      {/* <Counter /> */}

      {/* <BgChanger /> */}

      {/* <PasswordGenrator /> */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<AuthAuthorization />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
