import { Link, NavLink } from 'react-router-dom'
import '../../style/Sidebar.scss'
import LogoA from '../../assets/images/logo-A.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faMailReplyAll } from '@fortawesome/free-solid-svg-icons/faMailReplyAll'
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'


const Sidebar = () => 
(
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoA} alt='logo'/>
        </Link>
       <h3> From React </h3>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank"
                 rel='nereferrer' 
                 href='#'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4de" />
                </a>
            </li>

            <li>
                <a target="_blank"
                 rel='nereferrer' 
                 href='#'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4de" />
                </a>
            </li>

            <li>
                <a target="_blank"
                 rel='nereferrer' 
                 href='#'>
                    <FontAwesomeIcon icon={faFacebook} color="#4d4de" />
                </a>
            </li>

            <li>
                <a target="_blank"
                 rel='nereferrer' 
                 href='#'>
                    <FontAwesomeIcon icon={faMailReplyAll} color="#4d4de" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar