import Button from '../Button/Button'
import './BoxButtonAdopt.css'


const BoxButtonAdopt = () => {



    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div className='square-adopt-conteiner'>
                <h4>¿QUIERES ADOPTAR UN GATO?</h4>
                <div className='square-adopt'>
                    <p>Si has decidido adoptar un gato, te invitamos a conocer a nuestros gatos en adopción.</p>
                    <Button className={'btn-adopt-box-mini'} text={'ADOPTA'} />
                </div>


            </div>
        </div>
    )
}

export default BoxButtonAdopt