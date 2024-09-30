import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ExpenseDashbordPage from '../components/ExpenseDashbordPage';
import CreatePage from '../components/CreatePage';
import EditPage from '../components/EditPage';
import HelpPage from '../components/HelpPage';
import PrivateRoute from './PrivateRoute';
 import Login from '../components/Login';
import UserForm from '../components/UserForm';


const AppRouter = () => (
   <Router>
   <Routes>
     <Route element={<PrivateRoute/>}>
   
         <Route  path="/dashboard" element={<ExpenseDashbordPage />}  />
         <Route path="/create" element={<CreatePage />} />
         <Route path="/help" element={<HelpPage />} /> 
         <Route  path="/edit/:id/:description/:amount/:createdAt"  element={< EditPage /> } />
     </Route>
     <Route path='/' element={<Login/>}/>
     <Route path='/user' element={<UserForm />} />

   </Routes>
</Router>
);
  
  export default AppRouter;