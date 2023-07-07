import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    return (
        <div className="nav-bar">
            <Link className='logo' to='/'>
                <img src={LogoS} alt='logo' />
                <img className='sub-logo' src={LogoSubtitle} alt='logo' />
            </Link>
            <nav>
                <NavLink exact="true" active="active" to='/'>
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e'></FontAwesomeIcon>
                </NavLink>
                <NavLink exact="true" active="active" className="about-link" to='/about'>
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e'></FontAwesomeIcon>
                </NavLink>
                <NavLink exact="true" active="active" className="contact-link" to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'></FontAwesomeIcon>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/arun-kumar-58b963253/" target='_blank' rel='noneferrer'>
                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/arunks2003" target='_blank' rel='noneferrer'>
                        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar