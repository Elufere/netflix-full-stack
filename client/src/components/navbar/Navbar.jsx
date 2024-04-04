import React, { useState } from 'react'
import './navbar.scss'
import { IoSearch } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => window.onscroll = null;
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src="https://logohistory.net/wp-content/uploads/2023/05/Netflix-Logo.png" alt=""/>
          <Link to="/" className="link">
            <span className="navbarmainLinks">Homepage</span>
          </Link>
          <Link to="/series" className="link">
            <span className="navbarmainLinks">Series</span>
          </Link>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <IoSearch className='icon'/>
          <span>KID</span>
          <IoNotifications className='icon'/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRamOMXzIt9_mNmnGj0YtxH8RttH2kswPooaSoraQGnDiweyINI7q6-xH9fGWtj-E1HX94&usqp=CAU" alt="" 
          />
          <div className='profile'>
            <IoMdArrowDropdown className='icon'/>
            <div className='options'>
                <span>Settings</span>
                <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
