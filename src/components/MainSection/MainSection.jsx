import './MainSection.css'
import boxes1 from '../assets/boxes.JPEG'
import boxes2 from '../assets/boxes2.JPEG'
import boxes3 from '../assets/boxes3.JPEG'
import InfoCard from '../InfoCard/InfoCard'
import Button from '../Button/Button'






const MainSection = () => {




    return (
        <section className='main-section'>

            <div id='conteiner-main'>
                <InfoCard title={'SOBRE ELLOS'} img={boxes1} />
                <InfoCard title={'CUIDADOS GATUNOS'} img={boxes2} />
                <InfoCard title={'TIPS GATUNOS'} img={boxes3} />
            </div>
            <br />
            <br />
            <br />
            <Button className={'btn-main-section'} text={'ADOPTA'} />
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