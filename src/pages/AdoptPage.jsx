import BoxAdopt from "../components/BoxAdopt/BoxAdopt"
import poAdorable from '../components/assets/po-adorable.jpeg'
import Protocol from "../components/Protocol/Protocol"
import AdoptForm from "../components/AdoptForm/AdoptForm"
import BoxButtonAdopt from "../components/BoxButtonAdopt/BoxButtonAdopt"



const AdoptPage = () => {





    return (
        <div>
            <BoxAdopt
                title={'CÓMO ADOPTAR'}
                title2={'ANTES DE TOMAR LA DECISIÓN DE ADOPTAR, LEE ESTO'}
                img={poAdorable}
                link = {'/cats'}
                button={'GATOS EN ADOPCIÓN'}
                text={'Uno de nuestros objetivos principales es encontrar hogares donde nuestros gatos puedan vivir seguros y con tranquilidad el resto de sus vidas y por eso ponemos todo el esfuerzo necesario en elegir como adoptantes a personas responsables y conscientes de su decisión.'}
                text2={'La adopción no debe responder a un impulso, tiene que ser un acto meditado, y por eso es conveniente que antes de hacerlo pienses en el compromiso que adquieres con el animal y que reflexiones sobre algunas cuestiones previas, de esta forma la adopción será más segura y evitaremos problemas futuros para todos.'}
                text3={'Reflexiona y NO te dejes llevar por IMPULSOS, un nuevo compañero aunque sea no humano, implica:'}
                li={'Preparar un "material básico".'}
                li2={'Cambiar, ajustar la logística de vida.'}
                li3={'Cierta solvencia económica para resolver eventualidades que se pueden dar.'}
                li4={'Tendrá un animal muchos años.'}
            />
            <Protocol/>
            <AdoptForm/>
            <BoxButtonAdopt/>
        

        </div>
    )
}

export default AdoptPage