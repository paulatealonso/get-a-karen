import huella from '../assets/huella.png'
import './Protocol.css'

const Protocol = () => {



    return (
        <div className='protocol-conteiner'>
            <h3>Protocolo de adopción:</h3>

            <ul className='protocol-adopt-conteiner' style={{ listStyle: 'none' }}>
                <div className='protocol-adopt'>
                    <li className='li-protocol'> Cuestionario </li>
                    <p> Os pedimos rellenar un cuestionario pre-adopción con el que intentamos varias cosas:</p>
                    <ul style={{ listStyle: 'none' }}>
                        <li><img src={huella} alt='huella' /> <strong>Conocerte</strong> un poco mejor antes de confiarte uno de nuestros animales ya que, en muchos casos, han pasado por situaciones difíciles y se merecen que tratemos de conseguirles un buen hogar.</li>
                        <li><img src={huella} alt='huella' /><strong>Aconsejarte</strong> sobre qué animal es el que mejor se adaptaría a tus circunstancias porque no siempre el que te ha gustado puede ser el más adecuado para ti.</li>
                        <li><img src={huella} alt='huella' /><strong>Invitarte a reflexionar</strong> sobre algunas cuestiones que deberían plantearte si decides tener un gato en casa.</li>
                    </ul>
                </div>

                <div className='protocol-adopt'>
                    <li className='li-protocol'> Conversación telefónica </li>
                    <p>Después de recibir tu cuestionario por correo electrónico, te responderemos a él para concretar una cita por teléfono para mantener una conversación y <strong>concretar los últimos detalles</strong>.</p>
                </div>

                <div className='protocol-adopt'>
                    <li className='li-protocol'> Contrato de adopción</li>
                    <p>Finalmente, recoges al gato y <strong>formalizamos la adopción</strong> mediante la firma de un contrato en el que básicamente te comprometes a no abandonarle y a proporcionarle los cuidados que precise. Solicitamos una pequeña aportación económica para poder seguir ayudando a otros animales, ya que no disponemos de ningún tipo de ayuda pública y para poder continuar con nuestra tarea únicamente contamos con las cuotas de los socios y las de adopción.</p>
                </div>
            </ul>
            <br/>
            <p>Y por último, contarte que entregamos nuestros gatos con el protocolo sanitario acorde a su edad realizado, y que consiste en: desparasitación, pruebas de inmuno y leucemia, vacunación, y si el animal tiene la edad suficiente, esterilización. En el caso concreto de tu gato te lo explicaremos más específicamente antes de la adopción.<br/><br/> Si tienes cualquier duda, escríbenos a get-a-karen@gmail.com</p>
        </div>
    )
}

export default Protocol