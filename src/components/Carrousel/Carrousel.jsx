import React, { useContext } from "react"
import { Link } from "react-router-dom";
import { CatsApi } from "../../context/CatsApi"
import CardCat from "../CardCat/CardCat";

import './Carrousel.css'



const Carrousel = () => {

    const { cats } = useContext(CatsApi);
    const sliceCats = cats.slice(0, 7)


    let clonedCats = [];
    for (let i = 0; i < 10; i++) {
        clonedCats = clonedCats.concat(sliceCats);
    }

    return (
        <div id="slider-container">

            <div className="slider-wrapper">
                {clonedCats.map((cat, index) => {
                    return (
                        <CardCat
                            key={index}
                            name={cat.name}
                            id={cat.id}
                            description={cat.description}
                            img={cat.img}
                        />
                    )
                })}
            </div>

            <div id="cats-carousel-link">
                <Link to={'/Cats'}><button class="cta">
                    <span>VER MÁS</span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </button></Link>
            </div>

        </div>
    );
};

export default Carrousel;



