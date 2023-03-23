import React from 'react'
import { IoApps } from 'react-icons/io5'
import { RxAvatar } from 'react-icons/rx'
import './NavBar.css'

function NavBar() {
  return (
      <div className='home__header'>
          <div className='home__headerLeft'>
              <a href='/'>Home</a>
              <a href='/about'>About</a>
          </div>
          <div className='home__headerRight'>
              <a href='/images'>Images</a>
              <a href='/gmail'>Gmail</a>
              <IoApps />
              <RxAvatar />

          </div>
      </div>
  )
}

export default NavBar