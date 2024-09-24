import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ExpenseDashbordPage from '../components/ExpenseDashbordPage';
import CreatePage from '../components/CreatePage';
import EditPage from '../components/EditPage';
import HelpPage from '../components/HelpPage';
import NotFound from '../components/NotFound';
import Header from '../components/Header';
import LoginPage from '../components/Login';
import Logout from '../components/Logout';
import UserForm from '../components/UserForm';
import ProtectedRoute from './ProtectedRoute';
  function AppRouter() {
    // const { isAuthenticated } = useSelector((state) => state);
    return (
      <div className="App">
       
        <BrowserRouter>

            <Header />
        <Routes>
        <Route exact path='/' element={<PrivateRoute/>}>
      <Route exact path='/' element={<Home/>}/>
</Route>
        {/* {isAuthenticated ? ( */}
        <Route>
       
          <ProtectedRoute path="/dashbord" Component={ExpenseDashbordPage} />
          <ProtectedRoute path="/create" Component={CreatePage} />
            <ProtectedRoute path="/edit/:id/:description/:amount/:createdAt" Component={EditPage} />
            <ProtectedRoute path="/help" Component={HelpPage} />
            </Route>
            <Route path="/login" Component={LoginPage} />
          <Route path="/newUser" Component={UserForm} />
          <Route path="*" Component={NotFound} />
          
            
        <Route path="/" Component={LoginPage} />
   
    
      
          
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
  export default AppRouter;