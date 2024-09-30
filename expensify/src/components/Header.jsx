import {  NavLink} from 'react-router-dom';
import Logout from './Logout';
import { connect } from "react-redux";
const Header = (props) => (
    <header>
       <h1>Expensify</h1>

       <NavLink to='/dashboard' className={({ isActive}) => isActive ? "active" : "" } >Home</NavLink>&nbsp;&nbsp;
       <NavLink to='/create' className={({ isActive}) => isActive ? "active" : "" }>Create</NavLink>&nbsp;&nbsp;

       <NavLink to='/help'className={({ isActive}) => isActive ? "active" : "" }>Help</NavLink>
       <span>{props.user. user_username}</span>
     <Logout />
    </header>
  )
  const mapStateToProps = (state) => ({
    user: state.auth.user,
  });
  export default connect(mapStateToProps)(Header);