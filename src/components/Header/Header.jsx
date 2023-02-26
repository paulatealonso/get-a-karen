import headerCat from '../assets/header-img.jpeg'
import headerKitty from '../assets/header-2-img.jpeg'
import { Link } from 'react-router-dom'
import './Header.css'


const Header = () => {



    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={headerKitty} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={headerCat} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <header>
                <h1>BE A KAREN</h1>
                <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}><p>Conócelos</p></Link>
            </header>
        </div>
    )
}

export default Header