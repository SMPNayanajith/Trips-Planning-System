import './NavBar.css'
//import { Link } from 'react-router-dom'; // or the appropriate import for your routing library
import HomeIcon from '@mui/icons-material/Home';
import PlaceIcon from '@mui/icons-material/Place';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import './NavBar.css'


export default function NavBar() {
 


  return (
   <nav className="navBarItems">
        <h1 className="navBarLogo">Trippy</h1>

        <ul className="navMenu">
            <li className='icon'>
                <a href='/'>
                <HomeIcon/>
                  Home
                  </a>
            </li>
            <li className='icon'> 
                <a href='/about'>
                <PlaceIcon/>
                  Places
                  </a>
            </li>
            <li className='icon'>
                <a href='/service'>
                <HomeRepairServiceIcon/>
                  Service
                  </a>
            </li>
            <li className='icon'>
                <a href='/contact'>
                <PermContactCalendarIcon/>
                  Contact
                  </a>
            </li>
            <li className='icon'>
                <a href='/signup'>
                
                  Sign Up
                  </a>
            </li>

        </ul>
   </nav>
  )
}
