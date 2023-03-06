import { useContext, useState } from "react";
import { CatsApi } from "../../context/CatsApi";
import CardCat from "../CardCat/CardCat";
import './InputCats.css'


const InputCats = () => {

    const { cats } = useContext(CatsApi);
    const [search, setSearch] = useState('');
    const [citySearch, setCitySearch] = useState('');



    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const handleCityChange = (event) => {
        setCitySearch(event.target.value);
    };


    const catsFiltered = cats.filter((cat) => {

        const nameMatch = cat.name.toUpperCase().includes(search.toUpperCase());
        const cityMatch = cat.city.toUpperCase().includes(citySearch.toUpperCase());
        return nameMatch && cityMatch;

        // if (cat.name.toUpperCase().includes(search.toUpperCase())) {
        //     return true;
        // }
        // return false;

    });

    return (
        <div style={{ margin: '60px 0' }}>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="title-input-cat">
                <h2>Encuentra a tu michi</h2>
                <h4>Seguro que hay uno muy cerca de ti</h4>

                <div style={{ display: 'flex' }}>
                    <div className="box-labels-cats">
                        <label className="labels-cats">Nombre</label>
                        <input type='text' value={search} onChange={handleChange} className="inp-cats" placeholder="Ferrero Poche" />
                    </div>

                    <div className="box-labels-cats">
                        <label className="labels-cats">Ubicación</label>
                        <input type='text' className="inp-cats" value={citySearch} onChange={handleCityChange} placeholder="Madrid" />
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>

                {catsFiltered.map((cat, index) => {
                    return (
                        <CardCat
                            key={index}
                            name={cat.name}
                            id={cat.id}
                            location={cat.city}
                            description={cat.description}
                            img={cat.img}
                        />
                    )
                })}
            </div>

        </div>
    )
}

export default InputCats