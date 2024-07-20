import '../../style/about.scss'
import { useEffect, useState} from 'react'
import AnimatedLetters from '../AnimatedLettres/AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 
    { 
     faAngular,
     faCss3,
     faGitAlt,
     faHtml5,
     faJsSquare,
     faReact
     } from '@fortawesome/free-brands-svg-icons'

function About() {

    const [letterClass, setLetterClass] = useState ('text-animate')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover'); // Apply the animation class
        }, 3000); // Set animation delay to 3 seconds
    
        // Cleanup function to prevent memory leaks and potential errors
        return () => clearTimeout(timeoutId);
      }, []);


    return(
        
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                          letterClass={letterClass}
                          strArray={['A','b','o','u','t',' ','m','e']}
                          idx={15}
                    />
                </h1>
                <p>I'm very ambitious front-end developer looking for a role in establised 
                    IT company with the opportunity to work
                    with the latest technologies on challenging and diverse projects.
                </p>
                <p>
                    I'm very confident, naturelly cursious, and perpetually 
                    working on improving my chops one disign problem at a time
                </p>
                <p>
                   If I need to define myself in one sentence that would be a familly person, 
                   father of a beautiful daughter, a sports fanatic,
                   photography enthusiast, and tech-obsessed!!! 
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faCss3} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faHtml5} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color="#5ED4F4" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faReact} color="#EFD81D" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D2" />
                    </div>

                </div>
            </div>
        </div> 
    )
    
}

export default About