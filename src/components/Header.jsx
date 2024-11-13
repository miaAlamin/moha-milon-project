import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AuthProvider, { AuthContext } from "../AuthProvider/AuthProvider";


const Header = () => {


  const {user, signOutUser} = useContext(AuthContext)
  const navigate = useNavigate(null)

  const handlesignout = ()=>{
    signOutUser()
    .then(()=>{
      console.log('sign out successfull')
      navigate('/login')

    })
    .catch(error =>{
      console.log(error.message)
    })

  }

    return (
      <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/login'>Login</NavLink></li>
            <li><NavLink to='/register'>Register</NavLink></li>
            {
              user && <>
               <li><NavLink to='/orders'>Orders</NavLink></li>
               <li><NavLink to='/profile'>Profile</NavLink></li>
              </>
            }
        
           
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/login'>Login</NavLink></li>
            <li><NavLink to='/register'>Register</NavLink></li>

            {
              user && <>
               <li><NavLink to='/orders'>Orders</NavLink></li>
               <li><NavLink to='/profile'>Profile</NavLink></li>
              </>
            }
        </ul>
      </div>
      <div className="navbar-end">
        {
          user ? 
          <>
            <span className="mr-4">{user.email}</span>
            <a onClick={handlesignout} href="btn">sign Out</a>
          </>
          :
           <Link to='/login'>login</Link>
        }
        
      </div>
    </div>
    );
};

export default Header;