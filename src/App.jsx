import "./App.css";
// import PaginationCom from "./components/pagination/PaginationCom";
// import SearchInput from "./components/search-input/SearchInput";
// import Counter from "./components/two-counter/Counter";
// import BgChanger from "./components/bg-changer/BgChanger";
// import PasswordGenrator from "./components/password-genrator/PasswordGenrator";
// import TogglePassword from "./components/toggle-pass/TogglePassword";
// import ProductComponent from "./components/products/ProductComponent";
{/* Start Authentication Component */}
// import AuthAuthorization from "./components/authentication/AuthAuthorization";
// import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
// import Home from "./components/authentication/Home";
// import Profile from "./components/authentication/Profile";
// import Header from "./components/authentication/Header";
// import ProtectedRoute from "./components/authentication/ProtectedRoute";
{/* End Authentication Component */}
// import AuthenticationCom from "./components/auth/AuthenticationCom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/authentication/Header"
// import Home from "./components/authentication/Home";
// import AuthProfile from "./components/auth/AuthProfile";
import AppLayout from "./components/auth/AppLayout";
// import FormValidation from "./components/form-contextapi/FormValidation";
// import { FormValidationProvider } from "./components/form-contextapi/context/FormValidationProvider";
import PostCrud from "./components/crud/PostCrud";
// import HOCComponent from "./components/hoc/withCounter";
// import ClickCounter from "./components/hoc/ClickCounter";
// import HoverCount from "./components/hoc/HoverCount";
// import InfiniteScrollbar from "./components/scroll-bar/InfiniteScrollbar";
// import UsememoComponent from "./components/use-memo/UsememoComponent";
// import UsecallbaackCom from "./components/use-callback/UsecallbaackCom";
// import UserReducerComp from "./components/use-reducer/UserReducerComp";
// import UseContextComp from "./components/use-context/UseContextComp";
// import UserContextProvider from "./components/use-context/UserContextProvider";
import TanstackTable from "./components/table/tanstack-eight/TanstackTable";
// import LiftingStateUp from "./components/-Lifting-state-up/LiftingStateUp";
// import ParentPureCom from './components/pure-com/ParentPureCom'
// import TodosComponent from "./components/todos/TodosComponent";
// import CartApp from "./components/cart-app/CartApp";
// import BlogComponent from "./components/blog/BlogComponent";
import RefreshTokenAuth from "./components/auth-refresh/RefreshTokenAuth";
import RefreshDashboard from "./components/auth-refresh/RefreshDashboard";
import RefreshAppLayout from "./components/auth-refresh/RefreshRoute";
import RefreshRoute from "./components/auth-refresh/RefreshRoute";
import SortingTable from "./components/table/tanstack-eight/SortingTable";
import GlobalFilter from "./components/table/tanstack-eight/GlobalFilter";
import ToggleBtn from "./components/toggle/toggle-btn/ToggleBtn";
import CrudJson from "./components/json-crud/CrudJson";
import Contact from "./components/json-crud/Contact";
import NotFound from "./components/json-crud/NotFound";
import ProductList from "./components/json-crud/admin/products/ProductList";
import Navbar from "./components/json-crud/Navbar";
import CreateProduct from "./components/json-crud/admin/products/CreateProduct";
import CounterApp from "./components/react-10/counter/CounterApp";
import TodoApp from "./components/react-10/todo/TodoApp";
import ReactSagaComponent from "./components/react-saga/ReactSagaComponent";

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
        {/* <PostCrud /> */}
       {/*End Post CRUD */}
       {/* Start Infinite Scroll Bar */}
        {/* <InfiniteScrollbar /> */}
       {/* End Infinite Scroll Bar */}
       {/* Start HOC Function */}
        {/* <ClickCounter />
        <HoverCount /> */}
       {/* End HOC Function */}
       {/* Start UseMemo Component */}
         {/* <UsememoComponent /> */}
       {/* End UseMemo Component */}
       {/* Start UseMemo Component */}
         {/* <UsecallbaackCom /> */}
       {/* End UseMemo Component */}
       {/* Start UseMemo Component */}
         {/* <UserReducerComp /> */}
       {/* End UseMemo Component */}
       {/* Start UseMemo Component */}
         {/* <UserContextProvider>
             <UseContextComp />
         </UserContextProvider> */}
       {/* End UseMemo Component */}
       {/* Start Tanstack V8 Component  */}
         {/* <TanstackTable />  */}
         {/* <SortingTable /> */}
         {/* <GlobalFilter /> */}
       {/* End Tanstack V8 Component */}
       {/* Start Lifting State Up Compontent */}
        {/* <LiftingStateUp /> */}
       {/* End Lifting State Up Component */}
       {/* Start Pure Component */}
         {/* <ParentPureCom /> */}
       {/* End Pure Component */}
       {/* Start todo Component */}
        {/* <TodosComponent /> */}
       {/* End todo Component */}
       {/*  Start Cart App Component  */}
        {/* <CartApp /> */}
       {/* End Cart App Component */}
        {/* <BlogComponent /> */}
       {/* Start Blog Component */}
       {/* Start Authentication Use JWT with refresh token */}
        {/* <Router >
          <Routes>
            <Route path="/" element={<RefreshTokenAuth />} />
            <Route path="/dashboard" element={<RefreshRoute><RefreshDashboard /></RefreshRoute>} />
          </Routes>
        </Router> */}
       {/*End  Authentication Use JWT with refresh token */}
       {/*Start Toogle button with custom hook  */}
          {/* <ToggleBtn /> */}
       {/* End Toogle button with custom hook  */}
       {/* Start CRUD operation json server data */}
       {/* <BrowserRouter>
          <Navbar />
         <Routes>
           <Route path="/"  element={ <CrudJson />} />
           <Route path="/contact"  element={ <Contact />} />
           <Route path="/admin/products"  element={ <ProductList />} />
           <Route path="/admin/products/create"  element={ <CreateProduct />} />
           <Route path="*"  element={ <NotFound />} />
         </Routes>
       </BrowserRouter> */}
       {/* End CRUD operation json server data */}
       {/* Start  react 10 projects */}
         {/* <CounterApp /> */}
         {/* <TodoApp /> */}
       {/* End react 10 projects */}
       {/* Start React Saga */}
          <ReactSagaComponent />
       {/* End React Saga */}
       

    </>
  );
}

export default App;
