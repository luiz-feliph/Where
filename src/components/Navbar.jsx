import '../index.css'
import './Navbar.module.css'
import Logo from '../assets/Where.svg'
import Statistic from '../assets/Statistic.svg'
import Calendar from '../assets/Calendar.svg'


function Navbar() {

  return (
        <nav>
          <ul>
            <li><a href=""><img src={Statistic} alt="Statistic" /></a></li>
            <li><img src={Logo} alt="Where Logo" width="92" height="25" id='logo'/></li>
            <li><a href=""><img src={Calendar} alt="Calendar" /></a></li>
          </ul>
        </nav>
  )
}

export default Navbar