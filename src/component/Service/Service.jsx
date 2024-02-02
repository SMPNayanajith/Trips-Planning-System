import React from 'react'
import NavBar from '../NavBar/NavBar'
import img3 from '../../images1/image2.jpg';
import dunhida from '../../images1/dunhida.jpg';
import galle1 from '../../images1/galle1.jpg';
import kandy2 from '../../images1/kandy2.jpg';
import './Service.css'
import Footer from '../../Footer/Footer';

export default function Service() {
  return (
    <div>
       <NavBar/>
       <div className="image-container">
          <img src={img3} className='img3' alt="" />
          <div className="image">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using google maps.</p>
          </div>
       </div>

       <div className="all"> 
          <div className="badulla">
            <h1>Travel in Badulla</h1>
            <div className="badullaall">
              <img src={dunhida} alt="" />
              
            </div>
            <div className="text">
              Badulla is the capital and one of the major administrative cities in the Uva province of Sri Lanka. It has plenty of fascinating spots to explore the beauty of the small paradise of Sri Lanka. There are fascinating waterfalls, lush green tea gardens, and scenic village roads which increase the natural beauty of Badulla. The city is surrounded by the beautiful Badulu Oya River. There are plenty of tourist attractions and destinations in this wonderful city such as Muthiyangana Temple, Badulla Kataragama Devalaya, and Dunhinda Falls. Bogoda wooden bridge, Demodara railway station, St. Mark’s Church, Dhowa Rock Temple, and Halpewatta tea factory, are also worth having a visit in Badulla for a memorable traveling experience. 
            </div>
          </div>

          <div className="Galle">
            <h1>Travale in Galle</h1>
            <div className="gallall">
              <img src={galle1} alt="" />
             
            </div>
              <div className="text">
              Galle is a jewel. A Unesco World Heritage Site, this historic city is a delight to explore on foot, an endlessly exotic old trading port blessed with imposing Dutch-colonial buildings, ancient mosques and churches, grand mansions and museums. Wandering its rambling lanes you'll pass stylish cafes, quirky boutiques and impeccably restored hotels owned by local and foreign artists, writers, photographers and designers.
              </div>
          </div>

          <div className="kandy">
            <h1>Travale in Kandy</h1>
            <div className="kandyall">
              
              <img src={kandy2} alt="" /> 
            </div>
              <div className="text">
              In Kandy, Sri Lanka, you can immerse yourself in a wealth of activities. Start your journey with a visit to the sacred Temple of the Tooth, followed by a stroll around the scenic Kandy Lake. Explore the magnificent Royal Botanical Gardens or take a tea plantation tour. Don't miss the vibrant Kandy Esala Perahera festival, a dazzling cultural procession. End your day with a relaxing Ayurvedic spa treatment or a scenic hike to nearby nature trails. Kandy offers a perfect blend of history, culture, and natural beauty for an unforgettable experience.
              </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}
