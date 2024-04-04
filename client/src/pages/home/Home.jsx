import React, { useEffect, useState } from 'react';
import './home.scss';
import Navbar from "../../components/navbar/Navbar";
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import axios from "axios";

export default function Home({ type }) {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  
  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
          {
            headers: {
              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MGMwYjZmNzE0MjBhZjc2YjdhNWExNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMjA2NTk4OCwiZXhwIjoxNzEyNDk3OTg4fQ.6l9k1Tw2uE5PEzNwhWI2cyk4y7GlWwDpdIFcxfUHZc0"
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className='home'>
      <Navbar />
      <Featured />
      {lists.map((list) => (
        <List list={list}/>
      ))}
    </div>
  )
}
