import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ExpenseDashbordPage from '../components/ExpenseDashbordPage';
import CreatePage from '../components/CreatePage';
import EditPage from '../components/EditPage';
import HelpPage from '../components/HelpPage';
import NotFound from '../components/NotFound';
import Header from '../components/Header';
import PrivateRoute from './PrivateRoute';
 import Login from '../components/Login';
import UserForm from '../components/UserForm';


const AppRouter = () => (
   <Router>
   <Routes>
     <Route element={<PrivateRoute/>}>
   
         <Route  path="/dashboard" element={<ExpenseDashbordPage />}  />
         <Route path="/create" element={<Header /> &&<CreatePage />} />
         <Route  path="/edit/:id/:description/:amount/:createdAt"  element={<Header /> &&< EditPage /> } />
     </Route>
     <Route path='/' element={<Login/>}/>
     <Route path='/user' element={<UserForm />} />
   </Routes>
</Router>
);
  
  export default AppRouter;