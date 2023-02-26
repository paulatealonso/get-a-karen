import './BoxTopic.css'
const { Link } = require("react-router-dom")


const BoxTopic = ({img, title, text, page}) => {




    return (
        <div className="topics-box">
            <div id='topic-img' style={{textAlign: 'center', margin: '20px 0 40px 0'}}>
                <img src= {img} alt= {title} style={{width: '90px'}}/>
            </div>
            <div id='topic-title' style={{textAlign: 'center'}}>
                <h5>{title}</h5>
                <p>{text}</p>
            </div>

            <div id='topic-link' style={{textAlign: 'center'}}>
                <Link to={page} style= {{textDecoration: 'none', color: 'black', }}>IR</Link>
            </div>



        </div>
    )
}

export default BoxTopic