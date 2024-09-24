import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ExpenseDashbordPage from '../components/ExpenseDashbordPage';
import CreatePage from '../components/CreatePage';
import EditPage from '../components/EditPage';
import HelpPage from '../components/HelpPage';
import NotFound from '../components/NotFound';
import Header from '../components/Header';
import ProtectedRoute from './ProtectedRoute';

 import LoginPage from '../components/Login';
import Logout from '../components/Logout';
  function AppRouter(props) {
    
    

    return (
      <div className="App">
       
        <BrowserRouter>

            <Header />
        <Routes>
      
   <>
            <ProtectedRoute path="/dashbord" Component={ExpenseDashbordPage}/>
          <ProtectedRoute path="/create" Component={CreatePage} /> 
          <ProtectedRoute path="/edit/:id/:description/:amount/:createdAt"  Component={EditPage } /> 
          </>
          <ProtectedRoute path="/help" Component={HelpPage} />
          <Route  path="*" Component={NotFound} />
          <Logout />
      
   
        <Route path="/" Component={LoginPage} />
     
    
         
          
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
  export default AppRouter;