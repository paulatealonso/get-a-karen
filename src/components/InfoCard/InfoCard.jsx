import { Link } from 'react-router-dom'
import './InfoCard.css'

const InfoCard = ({img, title, link}) => {




    return (
       
            <div className='img-cat-box'>
                <img src={img} alt='' />
                <Link to={link}><h4>{title}</h4></Link>
            </div>
            
    )
}

export default InfoCard