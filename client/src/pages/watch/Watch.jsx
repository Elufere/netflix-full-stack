import React from 'react'
import './watch.scss'
import { IoArrowBack } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';

export default function Watch() {
  const {state} = useLocation();
  const movie = state.movie; 

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <IoArrowBack />
          Home
          </div>
        </Link>
      <video
       className="video" 
       autoPlay 
       progress 
       controls 
       src={movie.video}/>
    </div>
  )
};
