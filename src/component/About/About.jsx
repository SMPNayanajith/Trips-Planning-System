import React from 'react';
import NavBar from '../NavBar/NavBar';
import img2 from '../../images1/images.jpg';
import './About.css'; // Import your CSS file
import img3 from '../../images1/sigiriya.jpg';
import img4 from '../../images1/ella.jpg';
import img10 from '../../images1/nuwaraeliya.jpg';
import Footer from '../../Footer/Footer';

export default function About() {
  return (
    <div className="about-container">
      <NavBar />
      <div className="image-container">
        <img src={img2} className='img2' alt="" />
        <div className="image-text">
          <h1>Popular Places</h1>
          <p>Tours give you the oppertunity to see a lot, within a time frame.</p>
       </div>
      </div>
       
        <div className='sigiriyaall'>
          <div className='sigiriya'>
            <h1 className='sigiriyahead'>SIGIRIYA , Dambulla</h1>
            <p className='sigiriyapara'>Sigiriya, site in central Sri Lanka consisting of the ruins of an ancient stronghold that was built in the late 5th century CE on a remarkable monolithic rock pillar. The rock, which is so steep that its top overhangs the sides, rises to an elevation of 1,144 feet (349 metres) above sea level and is some 600 feet (180 metres) above the surrounding plain.The Sinhalese king Kashyapa I (reigned 477–495) built a palace in the shape of a monumental lion on the several acres of ground at the summit, intending it to be a safeguard against his enemies. However, the king was defeated in 495, and the palace fell into ruin. The site soon became a pilgrimage destination, however, and it is now a popular tourist spot. Visitors begin the final ascent to the top through the open paws of the lion, one of the few remaining portions of the palace that are still intact. Also notable are 21 rock paintings of apsaras (celestial singers and dancers).</p>
          </div>
          <div className='sigiriyaphoto'>
            <img src={img3} alt="" />
          </div>
        </div>

         <div className='ellaall'>
           <div>
              <img className='ellaphoto' src={img4} alt="" />
            </div>
              <div className='ella'>
                <h1 className='ellhead'>ELLA , Badulla</h1>
                <p className='ellatext'>Ella is a paradise like highland village set on southern edge of Uva Province of Sri Lanka. Ella village of salubrious climate nestles amidst hill after hill of tea plantations bringing in panoramic views of the Central Highlands of Sri Lanka. The finest view is afforded through a cleft in green hills, popularly called Ella Gap. Ella gap drop down nearly 1000 meters over the ridge of Central Highlands to bring in a telescopic view of the Great Plains as far as the southern coast of Sri Lanka.Ella is trekker's dreamland: waterfalls, rock cliffs, caves, plantations, villages, railway track and woods that abound with birdlife, provide ample opportunities for hiking, trekking and cycling.Restaurants at Ella serve good food at decent prices: with its cultivation of vegetables and fruits, Ella is a fine village to enjoy plateful after plateful of Sinhalese rice and curry cooked with garden fresh vegetables.</p>
              </div>
            
         </div>

         <div className='sigiriyaall'>
          <div className='sigiriya'>
            <h1 className='sigiriyahead'>NUWARAELIYA , Nuwaraeliya</h1>
            <p className='sigiriyapara'>Nuwara Eliya is Sri Lanka’s highest town and a favourite hill station during British colonial times. The town is still touted as ‘Little England’, an illusion maintained by the presence of the Nuwara Eliya Golf Club, a racecourse, the Victoria Park and excellent trout fishing in nearby lakes and rivers. The temperature can drop close to freezing at night, and log fires are a common feature of the many Tudor-style houses. Adding to the atmosphere is the spectacle of its townsfolk wrapped in winter jackets and woolly hats, carting incredible bundles of turnips, leeks, marrows and cabbages to the markets.Due to the high altitude, Nuwara Eliya has a much cooler climate than the lowlands of Sri Lanka, with a mean annual temperature of 16 °C. But the temperature changes, and sometimes it can be as low as 3°C. It is pretty cold at night in the winter, and there can even be frost. Although it rapidly warms up as the tropical sun climbs higher during the day. </p>
          </div>
          <div className='sigiriyaphoto'>
            <img src={img10} alt="" />
          </div>
        </div>
        <Footer/>
    </div>
  );
}
