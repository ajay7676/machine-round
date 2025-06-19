import "./App.css";
import PaginationCom from "./components/pagination/PaginationCom";
import SearchInput from "./components/search-input/SearchInput";
import Counter from "./components/two-counter/Counter";
import BgChanger from "./components/bg-changer/BgChanger";
import PasswordGenrator from "./components/password-genrator/PasswordGenrator";
import TogglePassword from "./components/toggle-pass/TogglePassword";
import ProductComponent from "./components/products/ProductComponent";
{/* Start Authentication Component */}
// import AuthAuthorization from "./components/authentication/AuthAuthorization";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/authentication/Home";
// import Profile from "./components/authentication/Profile";
// import Header from "./components/authentication/Header";
// import ProtectedRoute from "./components/authentication/ProtectedRoute";
{/* End Authentication Component */}
import AuthenticationCom from "./components/auth/AuthenticationCom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/authentication/Header"
import Home from "./components/authentication/Home";
import AuthProfile from "./components/auth/AuthProfile";
import AppLayout from "./components/auth/AppLayout";
import FormValidation from "./components/form-contextapi/FormValidation";
import { FormValidationProvider } from "./components/form-contextapi/context/FormValidationProvider";
import PostCrud from "./components/crud/PostCrud";

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
      {/* Start Authentication Component */}
      {/* <Router>
        <Header />
        <Routes>
          <Route path="/" element={<AuthAuthorization />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </Router> */}
      {/* End Authentication Component */}
       {/* Start Toggle Password Component */}
         {/* <TogglePassword /> */}
       {/* End Toggle Password Component */}
       {/* Start Product Component  */}
         {/* <ProductComponent /> */}
       {/* End Product Component */}
       {/* Start Autjhentication Component */}
        {/* <Router >
          <Routes>
            <Route path="/" element={<AuthenticationCom />} />
              <Route element={<AppLayout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/profile" element={<AuthProfile />} />
            </Route>
          </Routes>
        </Router> */}
       {/* End Authentication Component */}
       {/* Start Form Validation using Context API */} 
       {/* <FormValidationProvider>
          <FormValidation />
       </FormValidationProvider> */}
       {/* End Form Validation  using  Context API */}
       {/* Start Post CRUD  */}
        <PostCrud />
       {/*End Post CRUD */}
    </>
  );
}

export default App;
