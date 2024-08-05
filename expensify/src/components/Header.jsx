import {  NavLink} from 'react-router-dom';
const Header = () => (
    <header>
       <h1>Expensify</h1>
       <NavLink to='/' className={({ isActive}) => isActive ? "active" : "" } >Home</NavLink>&nbsp;&nbsp;
       <NavLink to='/create' className={({ isActive}) => isActive ? "active" : "" }>Create</NavLink>&nbsp;&nbsp;
       <NavLink to='/edit' className={({ isActive}) => isActive ? "active" : "" }>Edit</NavLink>&nbsp;&nbsp;
       <NavLink to='/help'className={({ isActive}) => isActive ? "active" : "" }>Help</NavLink>
    </header>
  )
  export default Header;