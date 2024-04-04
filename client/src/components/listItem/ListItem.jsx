import React, { useEffect, useState } from 'react';
import './listItem.scss';
import { FaPlay } from 'react-icons/fa6';
import { IoAddOutline } from 'react-icons/io5';
import { BiLike } from 'react-icons/bi';
import { BiDislike } from 'react-icons/bi';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(`/movies/find/${item}`, {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MGMwYjZmNzE0MjBhZjc2YjdhNWExNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMjA2NTk4OCwiZXhwIjoxNzEyNDk3OTg4fQ.6l9k1Tw2uE5PEzNwhWI2cyk4y7GlWwDpdIFcxfUHZc0',
          },
        });
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  return (
    <Link to="/watch" state={{ movie }}>
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie.img} alt="" />
        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <FaPlay className="icon" />
                <IoAddOutline className="icon" />
                <BiLike className="icon" />
                <BiDislike className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className="limit">{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}
