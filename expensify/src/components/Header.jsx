import {  NavLink} from 'react-router-dom';
import Logout from './Logout';
import { connect } from "react-redux";
const Header = (props) => (
  <>    <header className='header'>
       <div className='logo'>Expensify</div>
         <div className="header-right">
       <span>{props.user.user_username}</span>
     <Logout />
     </div>
    </header>
<div className='header-navlink'>
<NavLink to='/dashboard' className={({ isActive}) => isActive ? "active" : "link" } >Home</NavLink>&nbsp;&nbsp;
<NavLink to='/create' className={({ isActive}) => isActive ? "active" : "link" }>Create</NavLink>&nbsp;&nbsp;

<NavLink to='/help'className={({ isActive}) => isActive ? "active" : "link" }>Help</NavLink>
</div>
</>

  )
  const mapStateToProps = (state) => ({
    user: state.auth.user
  });
  export default connect(mapStateToProps)(Header);