import {  NavLink} from 'react-router-dom';
import Logout from './Logout';
const Header = () => (
    <header>
       <h1>Expensify</h1>

       <NavLink to='/dashboard' className={({ isActive}) => isActive ? "active" : "" } >Home</NavLink>&nbsp;&nbsp;
       <NavLink to='/create' className={({ isActive}) => isActive ? "active" : "" }>Create</NavLink>&nbsp;&nbsp;

       <NavLink to='/help'className={({ isActive}) => isActive ? "active" : "" }>Help</NavLink>
     <Logout />
    </header>
  )
  export default Header;