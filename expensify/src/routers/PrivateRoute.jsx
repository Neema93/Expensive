import React from 'react';
import { connect } from 'react-redux';
// import { Route, navigate } from 'react-router-dom';
import Header from '../components/Header';
import { Navigate, Outlet } from 'react-router-dom'
const PrivateRoute = (props) => {
 const  Auth = props.isAuthenticated;

    return(
    
        Auth ? <Outlet/> : <Navigate to='/'/>
    // <Route {...rest} component={(props) => (
    //   isAuthenticated ? (
    //     <div>
    //       <Header />
    //       <Component {...props} />
    //     </div>
    //   ) : (
    //       <navigate to="/" />
    //     )
    // )} />
  );
}



// const PrivateRoute = () => {
// console.log
//   let auth = {'token':true}
// return (
//     auth.token ? <Outlet/> : <Navigate to='/login'/>
//   )
// }
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps)(PrivateRoute);
