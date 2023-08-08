import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css";

const Navbar = () => {

  let stor=localStorage.setItem("token","naresh");

  let token=localStorage.getItem("token");

  const navBar=()=>{
    if(!token){
      return(
        <>
        <Link to='/'><li>SignIn</li></Link>
        <Link to='/'><li>SignUp</li></Link>
        </>
      )
    }
    else{
      return(
        <>
        <Link to='/'><li>Home</li></Link>
        <Link to='/'><li>Product</li></Link>
        <div className='search-bar'>
        <input className='input-val' placeholder='Search Items..' type="search"></input>
        <button>Search</button>
        </div>
         <Link to="/Cart"><i className='bx bx-cart'></i></Link>
        <button>LogOut</button>
        </>
      )
    }
  }

  return (
   <nav>
    <div className='logo'>UpCloth</div>
    <i id='icon' class='bx bx-menu-alt-right'></i>
    <ul>
       {
        navBar()
       }
        

    </ul>
   </nav>
  )
}

export default Navbar