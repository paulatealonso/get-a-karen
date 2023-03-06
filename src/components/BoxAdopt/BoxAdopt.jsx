import './BoxAdopt.css'
import huella from '../assets/huella.png'
import { Link } from 'react-router-dom'

const BoxAdopt = ({ title, img, text, text2, text3, title2, li, li2, li3, li4, button, link }) => {





    return (
        <div className="sponsor-conteiner">
                <h1 style={{ marginTop: '150px' }}>{title}</h1>
                <Link to= {link}><button>{button}</button></Link>
            <div className="sponsor-box-info">
                <div className="sponsor-img-box">
                    <img src={img} alt='' />
                </div>

                <div className="sponsor-box-info-items">
                    <h5>{title2}</h5>
                    <p>{text}</p>
                    <p>{text2}</p>
                    <p>{text3}</p>
                    <ul>
                        <li><img src={huella} alt= 'huella'/>{li}</li>
                        <li><img src={huella} alt= 'huella'/>{li2}</li>
                        <li><img src={huella} alt= 'huella'/>{li3}</li>
                        <li><img src={huella} alt= 'huella'/>{li4}</li>
                    </ul>
                    
                </div>
                
            </div>

        </div>
    )
}

export default BoxAdopt