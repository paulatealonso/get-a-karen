import './InfoCard.css'

const InfoCard = ({img, title}) => {




    return (
       
            <div className='img-cat-box'>
                <img src={img} alt='' />
                <h4>{title}</h4>
            </div>
            
    )
}

export default InfoCard