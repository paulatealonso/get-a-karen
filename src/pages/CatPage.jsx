import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import AdoptForm from "../components/AdoptForm/AdoptForm";
import Button from "../components/Button/Button";
import { CatsApi } from "../context/CatsApi";


const CatPage = () => {
    const { name } = useParams();
    const { cats } = useContext(CatsApi);
    const [cat, setCat] = useState(null);
    const [showForm, setShowForm] = useState(false);



    useEffect(() => {
        const cat = cats.find((cat) => cat.name === name);
        setCat(cat);
    }, [cats, name]);

    if (!cat) {
        return <div>Loading...</div>;
    }


    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1 style={{ fontSize: '55px', fontWeight: '700' }}>{cat.name}</h1>

            <div style={{
                maxWidth: '500px',
                margin: '50px auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px',
                backgroundColor: '#ffbadb',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
            }}>
                <img src={cat.img} alt={cat.name} style={{
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: '10px'
                }} />
            </div>

            <div className="info-api-cats">
                <p style={{
                    fontSize: '24px',
                    fontWeight: '500',
                    color: '#4d4d4d',
                    textAlign: 'center',
                    margin: '20px 0 30px 0'
                }}>{cat.city}
                </p>

                <p style={{
                    fontSize: '18px',
                    lineHeight: '1.5',
                    textAlign: 'justify',
                    color: '#4d4d4d',
                    margin: '15px 0',
                }}>{cat.description}
                </p>

                <p style={{
                    fontSize: '18px',
                    lineHeight: '1.5',
                    textAlign: 'justify',
                    color: '#4d4d4d',
                    margin: '15px 0',
                }}>{cat.descrip}
                </p>

                <p style={{
                    fontSize: '18px',
                    lineHeight: '1.5',
                    textAlign: 'justify',
                    color: '#4d4d4d',
                    margin: '15px 0',
                }}>{cat.desc}
                </p>

                <p style={{
                    fontSize: '18px',
                    lineHeight: '1.5',
                    textAlign: 'justify',
                    color: '#4d4d4d',
                    margin: '15px 0',
                }}>{cat.des}
                </p>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}} className= 'info-api-btns'>
                <button className='btn-form-cat' onClick={() => setShowForm(true)} >ADOPTA</button>
                <Link to={'/payment'} ><Button text={'APADRINA'} className='btn-form-cat'/></Link>
            </div>
            {showForm ? <AdoptForm name= {cat.name} /> : null}


        </div >
    )
}


export default CatPage