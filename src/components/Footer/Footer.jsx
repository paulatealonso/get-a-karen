import './Footer.css'
import insta from '../assets/instagram.png'
import face from '../assets/facebook.png'
import linkedin from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'

const Footer = () => {




    return (
        <div className='footer'>
            <div className='rrss'>
                <img src={face} alt='' />
            </div>

            <div className='rrss'>
                <img src={twitter} alt='' />
            </div>

            <div className='rrss'>
                <img src={insta} alt='' />
            </div>

            <div className='rrss'>
                <img src={linkedin} alt='' />
            </div>



        </div>
    )
}

export default Footer