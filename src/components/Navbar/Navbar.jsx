import logo from '../assets/logo-white.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'

const Navbar = () => {

    const [showList, setShowList] = useState(false)
    const [showLines, setShowLines] = useState(false)

    const toggleShowList = () => {
        setShowList(!showList)
    }

    const toggleShow = () => {
        setShowLines(!showLines)
    }

    return (

        <div className='nav'>
            <div className='nav-bar'>
                <div>
                <Link to={'/'} ><img src={logo} alt='logo' id='logo' /></Link>
                </div>

                <div>
                    <ul className='navbar-list'>
                        <li><Link to={'/'} >Inicio</Link></li>
                        <li onMouseOver={() => toggleShowList()}>Nuestros michis</li>

                        <li onMouseOver={() => toggleShow()}> Colabora</li>
                        <li><Link to={'/'} >Descubrir</Link></li>
                        <li><Link to={'/contact'} >Contacto</Link></li>
                        <li><Link to={'/'} >Acerca de</Link></li>

                    </ul>
                </div>

            </div>
            {showList && <div id='show-nav'>
               
                    <li style={{borderBottom: '1px solid rgb(179, 179, 179)', paddingBottom: '15px'}}><Link to={'/cats'} style= {{textDecoration: 'none', color: 'black'}}>Gatos</Link></li>
                    <li><Link to={'/adopted'} style= {{textDecoration: 'none', color: 'black'}}>En familia</Link></li>
               
            </div>}

            {showLines && <div id='show-navbar'>
                    <li style={{borderBottom: '1px solid rgb(179, 179, 179)', paddingBottom: '15px'}}><Link to={'/'} style= {{textDecoration: 'none', color: 'black'}}>Apadrina</Link></li>
                    <li style={{borderBottom: '1px solid rgb(179, 179, 179)', paddingBottom: '15px'}}><Link to={'/'} style= {{textDecoration: 'none', color: 'black'}}>Casas de acogida</Link></li>
                    <li style={{borderBottom: '1px solid rgb(179, 179, 179)', paddingBottom: '15px'}}><Link to={'/'} style= {{textDecoration: 'none', color: 'black'}}>Hazte socio</Link></li>
                    <li><Link to={'/'} style= {{textDecoration: 'none', color: 'black'}}>Donación</Link></li>
            </div>}

        </div>
    )
}


export default Navbar