import { useContext } from 'react';
import { AdoptedApi } from '../../context/AdoptedApi'
import './AdoptedSection.css'


const AdoptedSection = () => {

    const { adopted } = useContext(AdoptedApi);


    return (
        <div style={{ margin: '120px 0' }}>

            <div>

                {adopted.map((cat, index) => {
                    const videos = cat.video;
                    const img = cat.img;
                    return (
                        <div key={index} id={cat.id} className='adopted-card'>
                            <h4>{cat.name}</h4>
                            <p>{cat.description}</p>
                            {img.map((img, imgIndex) => {
                                return (
                                    <div key={imgIndex}>
                                        <img src={img} alt="" />
                                    </div>
                                );
                            })}
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
                    )
                })}
            </div>


        </div>
    )
}

export default AdoptedSection