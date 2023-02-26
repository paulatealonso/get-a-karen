import { Link } from "react-router-dom"
import './CardCat.css'

const CardCat = ({ name, img, description, location, id }) => {





    return (
        <div className="card-cat">
            <img src={img} alt={name} />
            <div className="card-name">
            <Link to={'/Cats'}><h4>{name.toUpperCase()}</h4></Link>
            </div>

            <div className="card-info-cats">
                <h3>{location}</h3>
                <p>{description}</p>
            </div>

            <div className="card-link">
                <Link to={'/Cats'}>VER A {name.toUpperCase()}</Link>
            </div>




        </div>
    )
}


export default CardCat