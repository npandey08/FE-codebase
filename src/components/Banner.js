import '../styles/HomePage.css'
import logo from '../assets/logo.PNG'

function Banner() {
    return (
        <>
            <div className='navigation'>
            <img className='headerimg' src={logo} alt="logo" width="100" length="50" />
            <h1 className='header'>Railman Caterings</h1>
            <ul className='ullu'>
                <li className='list'><a href="#" className="navigation-item">About</a></li>
                <li className='list'><a href="#" className="navigation-item">Account</a></li>
                <li className='list'><a href="#" className="navigation-item">Contact</a></li>
            </ul>
            </div>
        </>
    )
}

export default Banner;
