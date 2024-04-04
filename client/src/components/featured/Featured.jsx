import React, {useEffect, useState} from 'react';
import "./featured.scss";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai"
import axios from 'axios';

export default function Featured({ type }) {
  const [content, setContent] = useState({});

  useEffect(()=>{
    const getRandomContent = async () => {
      try{
        const res = await axios.get(`/movies/random?type=${type}`,{
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MGMwYjZmNzE0MjBhZjc2YjdhNWExNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMjA2NTk4OCwiZXhwIjoxNzEyNDk3OTg4fQ.6l9k1Tw2uE5PEzNwhWI2cyk4y7GlWwDpdIFcxfUHZc0',
            },
          }
        )
        setContent(res.data[0]);
      }catch(err) {
        console.log(err)
      }
    };
    getRandomContent();
  },[type]);

  return (    
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src={content.img}
        alt=""
      />
      <div className="info">
        <img
          src={content.imgTitle}
          alt=""
        />
        <span className="desc">
          {content.desc}
        </span>
        <div className="buttons">
          <button className="play">
            <FaPlay />
            <span>Play</span>
          </button>
          <button className="more">
            <AiOutlineInfoCircle />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}