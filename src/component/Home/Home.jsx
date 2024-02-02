
import React from 'react'
import './Home.css'
import NavBar from '../NavBar/NavBar'
import img1 from '../../images1/photo.jpg';
import { Link } from 'react-router-dom';



export default function Home() {
  return (
    <div className='home-container'>
      <NavBar/>
      <div className="background-image" style={{ backgroundImage: `url(${img1})` }}>

        <div className='aa'>
          <h1 >Your Jurney is Your Story</h1>
          <p>Choose your favorite destinations...</p>
          <button type="button" class="btn btn-primary btn-lg" >
           <Link to ='/Service' className='buttonlink'>Travel Plan</Link>
          </button>
        </div>
          <div  className='aboutpara'>
                  <p>This site will help you to get an idea and details about trips you can arrange. we will update this site frequently with our travelling experiences.</p>
          </div>
      </div>

    </div>
  )
}
