import { Link } from "react-router-dom"
import './CardCat.css'

const CardCat = ({ name, img, description, location}) => {





    return (
        <div className="card-cat">
            <img src={img} alt={name} />
            <div className="card-name">
            <Link to={`/cat/${name}`}><h4>{name.toUpperCase()}</h4></Link>
            </div>

            <div className="card-info-cats">
                <h4>{location}</h4>
                <p>{description}</p>
            </div>

            <div className="card-link">
                <Link to={`/cat/${name}`}>VER A {name.toUpperCase()}</Link>
            </div>




        </div>
    )
}


export default CardCat