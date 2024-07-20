import { Link } from 'react-router-dom'
import LogoA from '../../assets/images/logo-A.png'
import { useEffect, useState} from 'react'
import Logo from './Logo/Logo'
import '../../style/home.scss'
import AnimetedLetters from '../AnimatedLettres/AnimatedLetters'


function Home  () {
    const [letterClass, setLetterClass] = useState ('text-animate')
    const nameArray = ['u','p','e','r','m','a','n']
    const jobArray = [
        'w',
        'e',
        'b',
        ' ',
        'd',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'e',
        'r',
        '.']

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover'); // Apply the animation class
    }, 4000); // Set animation delay to 4 seconds

    // Cleanup function to prevent memory leaks and potential errors
    return () => clearTimeout(timeoutId);
  }, []);

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1> 
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass}_12`}>i,</span>
                <br/>
                <span className={`${letterClass}_13`}>I</span>
                <span className={`${letterClass}_14`}>'m</span>
                <img src={LogoA} alt="logo" />
                <AnimetedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}
                />
                <br/>
                <AnimetedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22}
                />
                </h1>
                <h2>Frontend Developer / react.JS Specialist / Git & Github Expert</h2>
                <Link to="/Contact" className='flat-button'>CONTACT ME</Link>
            </div>
             <Logo />
        </div>
    )
} 

export default Home