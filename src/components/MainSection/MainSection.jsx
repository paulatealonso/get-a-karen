import './MainSection.css'
import boxes1 from '../assets/boxes.JPEG'
import boxes2 from '../assets/boxes2.JPEG'
import boxes3 from '../assets/boxes3.JPEG'
import InfoCard from '../InfoCard/InfoCard'
import { Link } from 'react-router-dom'






const MainSection = () => {




    return (
        <section className='main-section'>

            <div id='conteiner-main'>
                <InfoCard title={'SOBRE ELLOS'} img={boxes1} link = {'/discover'}/>
                <InfoCard title={'CENTROS DE ADOPCIÓN'} img={boxes2} link = {'/shelter'}/>
                <InfoCard title={'TIPS GATUNOS'} img={boxes3} link = {'/discover'}/>
            </div>
            <br />
            <br />
            <br />
            <button className={'btn-main-section'}><Link to={'/cats'}>ADOPTA</Link></button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />


        </section>)
}


export default MainSection