import React, { useEffect ,useState } from 'react';
import Header from '../../components/Header';
import './home.scss';
import {useVideoList} from '../../hooks/useVideoList';
import ReactPlayer from "react-player";
import { NavLink } from "react-router-dom";
import { useRemoveVideos } from '../../hooks/useVideoList';




const Home = () => {

const {isLoading,data,isError}=useVideoList()

   const { mutate: deletevideo } = useRemoveVideos();

if (isLoading) {
  return <h2>Loading......</h2>;
}
if (isError) {
  return <h2>error.message</h2>;
}



   
const removeVideo=(id)=>{
  console.log('id',id);
   deletevideo(id);
}

  return (
    <>
      <Header />
      <button>
        <NavLink to="upload" exact className="upload">
          Upload
        </NavLink>
      </button>
      <div className="video">
        {data?.data.map((elem) => {
          return (
            <>
              <div key={elem.id}>
                <ReactPlayer
                  width="90%"
                  height="200px"
                  url={elem.link}
                  controls
                />
                <div>
                  <button onClick={()=>removeVideo(elem.id)}>Delete</button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Home;
