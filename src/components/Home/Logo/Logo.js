import '../../../style/Logo.scss'
import LogoA from '../../../assets/images/logo-A.png'
import { useRef } from 'react'

const Logo = () => {

    const bgRef = useRef ();
    const outlinerLogo = useRef ();
    const solidLogoRef = useRef ();

    return (
        <div className="logo-container">
            <img className="solid-logo" src= {LogoA} alt="A" />    
        </div> 
    )
}

export default Logo