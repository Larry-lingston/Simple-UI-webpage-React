import React from 'react'
import './header.css'
import { FaSpotify } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";



const navbar = () => {
  return (
    <div className='header'>
        <div><p>Companies We Have Helped Built</p></div>
        <div>
            <p><FaSpotify /><span>Spotify</span></p>
            <p><FaInstagram /><span>Spotify</span></p>
            <p><FaFacebook /><span>Spotify</span></p>
            <p><FaGithub /><span>Spotify</span></p>
            <p><FaTwitter /><span>Spotify</span></p>
            <p><FaGoogle /><span>Spotify</span></p>
        </div>
    </div>
  )
}

export default navbar
