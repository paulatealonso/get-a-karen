import headerCat from '../assets/header-img.jpeg'
import headerKitty from '../assets/header-2-img.jpeg'
import cuties from '../assets/cuties.webp'
import { Link } from 'react-router-dom'
import './Header.css'
import { useEffect, useState } from 'react'


const Header = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
        setActiveIndex(activeIndex === 0 ? 2 : activeIndex - 1);
    };

    const handleNext = () => {
        setActiveIndex(activeIndex === 2 ? 0 : activeIndex + 1);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            handleNext();
        }, 5000); 
        return () => clearInterval(intervalId);
    }, [activeIndex]);


    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className={activeIndex === 0 ? "active" : ""} aria-current={activeIndex === 0} aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className={activeIndex === 1 ? "active" : ""} aria-current={activeIndex === 1} aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className={activeIndex === 2 ? "active" : ""} aria-current={activeIndex === 2} aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className={activeIndex === 0 ? "carousel-item active" : "carousel-item"}>
                        <img src={headerKitty} className="d-block w-100" alt="Slide 1" />
                    </div>
                    <div className={activeIndex === 1 ? "carousel-item active" : "carousel-item"}>
                        <img src={headerCat} className="d-block w-100" alt="Slide 2" />
                    </div>
                    <div className={activeIndex === 2 ? "carousel-item active" : "carousel-item"}>
                        <img src={cuties} className="d-block w-100" alt="Slide 3" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" onClick={handlePrev}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" onClick={handleNext}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <header>
                <h1>BE A KAREN</h1>
                <Link to={'/cats'} style={{ textDecoration: 'none', color: 'white' }}><p>Conócelos</p></Link>
            </header>
        </div>
    )
}

export default Header