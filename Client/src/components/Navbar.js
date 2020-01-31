
import React, { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../Context/context'

export const Navbar = () => {
 const history = useHistory()
 const auth = useContext(AuthContext)

 const logoutHandler = event => {
  event.preventDefault()
  auth.logout()
  history.push('/')
 }

 return (
  <nav>
   <div className="nav-wrapper blue darken-1" style={{ padding: '0 2rem' }}>
    <span className="brand-logo">LinksReducer</span>
    <ul id="nav-mobile" className="right hide-on-med-and-down">
     <li><NavLink to="/create">Create</NavLink></li>
     <li><NavLink to="/links">Links</NavLink></li>
     <li>  <button
      className="waves-effect waves-light btn-small"
      onClick={logoutHandler}
     >
     
      Log Out</button></li>
    </ul>
   </div>
  </nav>
 )
}