import BoxTopic from "../BoxTopic/BoxTopic.jsx"
import lupa from '../assets/lupa.png'
import hearts from '../assets/hearts.png'
import handshearth from '../assets/handshearth.png'




const SectionTopic = () => {




    return (
        <div style={{display: 'flex', justifyContent: 'space-evenly', margin : '40px 0'}}>
            <BoxTopic
                img={handshearth}
                title={'Apadrina'}
                text={'Si quieres tener un animal en tu vida pero actualmente no puedes disfrutarlo en casa, te ofrecemos la posibilidad de apadrinar uno.'}
                page={'/cats'}
            />

            <BoxTopic
                img={hearts}
                title={'Michis que hicieron match'}
                text={'Para todos aquellos karens que acogen a un gato para darle el amor y cuidado que tanto necesita.'}
                page={'/adopted'}
            />

            <BoxTopic
                img={lupa}
                title={'Descubre'}
                text={'Sample text. Click to select the text box. Click again or double click to start editing the text.'}
                page={'/discover'}
            />



        </div>
    )
}


export default SectionTopic