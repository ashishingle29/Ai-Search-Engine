import React from "react";
import Search from "./Search";
import "./Home.css";
// import NavBar from "../NevBar/NavBar";
// import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home">
      {/* <NavBar /> */}
      {/* <div className='home__header'>
                <div className='home__headerLeft'>
                    <a href='/home'>Home</a>
                    <a href='/about'>About</a>
                </div>
                <div className='home__headerRight'>
                    <a href='/images'>Images</a>
                    <a href='/gmail'>Gmail</a>
                    <IoApps />
                    <RxAvatar />
                
                </div>
            </div> */}
      <div className="home__body">
        <div>
            <h1>Ai Search Engine</h1>
            <p className="developedby">Developed By <a href="https://ashishingle.netlify.app/" target="_blank">Ashish Ingle</a> </p>
        </div>
        {/* <img
          alt="Google"
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        ></img> */}
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
