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
  function AppRouter() {
    const { isAuthenticated } = useSelector((state) => state);
    return (
      <div className="App">
       
        <BrowserRouter>

            <Header />
        <Routes>
        {isAuthenticated ? (
   
            <>
            <Route path="/dashbord" Component={ExpenseDashbordPage} />
            <Route path="/create" Component={CreatePage} />
            <Route path="/edit/:id/:description/:amount/:createdAt" Component={EditPage} />
            <Route path="/help" Component={HelpPage} />
            <Route path="/newUser" Component={UserForm}/>
            <Route path="*" Component={NotFound} />
            <Logout />
            </>
      
      ) : (
        <Route path="/" Component={LoginPage} />
      )}
    
         
          
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
  export default AppRouter;