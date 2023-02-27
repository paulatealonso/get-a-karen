
import catsect from '../assets/cat-sect.jpeg'

const CatsSection = () => {



    return (
        <div className="cats-section">
            <div>
                <img src={catsect} className="d-block w-100" alt="..." />
            </div>

            <header>
                <h1>SÁLVALOS</h1>
            </header>


        </div>
    )
}

export default CatsSection