import '../../style/contact.scss'
import { useEffect, useState} from 'react'
import AnimatedLetters from '../AnimatedLettres/AnimatedLetters'

const Contact = () => {

    const [letterClass, setLetterClass] = useState ('text-animate')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover'); // Apply the animation class
        }, 3000); // Set animation delay to 3 seconds
    
        // Cleanup function to prevent memory leaks and potential errors
        return () => clearTimeout(timeoutId);
      }, []);


    return (

        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C','o','n','t','a','c','t','','m','e']}
                    idx={15}
                    
                    />
                </h1>
                <p>
                   I'm intersted in freelence opportunities - especially ambitious or large projet.
                   However, if your have other request or question, 
                   don't hesitate to contact me below form either. 
                </p>
                <div className='contact-form'>
                    <form>
                        <ul>
                           <li className='half'>
                            <input type="text" name="name" placeholder='Name' required />
                           </li>
                           <li className='half'>
                            <input type="email" 
                            name="email" 
                            placeholder='Email' 
                            required
                            />
                           </li>
                           <li>
                            <input
                             placeholder="Subject" 
                             type="text" 
                             name="subject" 
                             required />
                           </li>
                           <li>
                            <textarea
                             placeholder="Message" 
                             name="message"
                             required
                             ></textarea>
                           </li>
                           <li>
                            <input type="submit" className='flat-button' value="SEND"/>
                           </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact