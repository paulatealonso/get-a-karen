import { useEffect, useState } from "react";
import db, { collection, getDocs } from "../../utils/Firebase";
import './AdoptBase.css'


const AdoptBase = () => {

    const [adopted, setAdopted] = useState([]);

    useEffect(() => {
        const obtenerGatos = async () => {
            const gatosColeccion = collection(db, 'adopted');
            const gatosSnapshot = await getDocs(gatosColeccion);
            const gatosLista = gatosSnapshot.docs.map(doc => doc.data());
            setAdopted(gatosLista);

        }

        obtenerGatos();
    }, []);



    return (
        <div style={{ margin: '200px 0' }}>
            <h1>Gatos</h1>
            {adopted.map((cat, index) => {
                const img = cat.img;
                const videos = cat.video;
                return (
                    <div key={index} className='adopted-card'>
                        <h3>{cat.name}</h3>
                        <p>{cat.description}</p>
                        <div className="base-img" >
                            {img && img.map((img, imgIndex) => {
                                return (
                                    <div key={imgIndex} className="base-img-slider" >
                                        <img src={img} alt="" />
                                    </div>
                                );
                            })}
                        </div>
                        <div key={index} className='adopted-card'>
                            {videos ? (
                                videos.map((video, videoIndex) => {
                                    return (
                                        <video key={videoIndex} width="100%" controls>
                                            <source src={video} type="video/mp4" ></source>
                                            Tu navegador no admite el elemento de video.
                                        </video>
                                    );
                                })
                            ) : (
                                <div style={{ height: '100px' }}></div>
                            )}
                        </div>
                    </div>)

            })}

        </div>
    )
}

export default AdoptBase