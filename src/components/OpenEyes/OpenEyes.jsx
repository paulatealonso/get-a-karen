import pepadormida from '../assets/pepa-dormida.PNG'
import Button from '../Button/Button'
import './OpenEyes.css'

const OpenEyes = () => {



    return (
        <div className='box-open'>
            <div id='box-title-open' >
                <h2>¿Por qué los gatos duermen con los ojos abiertos?</h2>
                <p>Según especialistas, los gatitos pueden dormir hasta 18 horas al día, mientras que los gatos senior alcanzan las 20 horas. Durante el periodo de descanso algunos lo hacen con la lengua afuera y otro con los ojos abiertos.</p>
                <Button className= {'btn-open'}text = {'APRENDER'}></Button>
            </div>

            <div id='box-img-open'>
                <img src={pepadormida} alt = 'pepa dormida'/>
            </div>



        </div>
    )
}

export default OpenEyes