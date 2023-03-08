import { useState } from 'react';
import pinte from '../assets/pinte.jpeg'
import pinte2 from '../assets/pinte2.jpeg'
import './TricksCats.css'

const TricksCats = () => {

    const [isFirstImage, setIsFirstImage] = useState(true);

    const handleImageClick = () => {
      setIsFirstImage(!isFirstImage);
    };

    return (
        <div style={{ margin: '150px 0' }} className='container-tricks'>
            <div className='container-tricks-title'>
                <h2>FEROMONAS PARA GATOS</h2>
            </div>
            <div className='box-tricks'>
                <div className='box-tricks-info'>

                    <p>Las feromonas son sustancias químicas que segregan los animales (no solo los gatos) y que son un medio de transmisión de señales. Las feromonas son moléculas portadoras de información, que transfieren mensajes de un gato a otro. Son un vehículo de comunicación química. En definitiva, ¿para qué sirven las feromonas?</p>
                    <ul>
                        <li>Para solucionar problemas de miedo.</li>
                        <li>Para evitar problemas de estrés y/o ansiedad.</li>
                        <li>Cuando dos gatos no se llevan bien debido a la nueva llegada a casa de uno de ellos.</li>
                        <li>Llegada de un bebé a la familia.</li>
                        <li>Mudanzas.</li>
                        <li>Obras en casa.</li>
                        <li>Traslado en transportín para ir de viaje o acudir al veterinario.</li>
                        <li>Postoperatorio.</li>
                    </ul>
                </div>

                <div className='box-tricks-img'>
                <img src={isFirstImage ? pinte : pinte2} alt='' onClick={handleImageClick} />

                </div>

            </div>

            <div>

            </div>

        </div>
    )
}

export default TricksCats