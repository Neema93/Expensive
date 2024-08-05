import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ExpenseDashbordPage from '../components/ExpenseDashbordPage';
import CreatePage from '../components/CreatePage';
import EditPage from '../components/EditPage';
import HelpPage from '../components/HelpPage';
import NotFound from '../components/NotFound';
import Header from '../components/Header';
  function AppRouter() {
  
    return (
      <div className="App">
       
        <BrowserRouter>
        <div>
          <Header />
  
        </div>
        <Routes>
          <Route path="/" Component={ExpenseDashbordPage} />
          <Route path="/create" Component={CreatePage} /> 
          <Route path="/edit" Component={EditPage} /> 
          <Route path="/help" Component={HelpPage} />
          <Route  path="*" Component={NotFound} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
  export default AppRouter;