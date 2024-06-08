import { Link } from "react-router-dom";
import '../index.css';
import './Nav.css';

export function Nav({theme, toggleTheme}) {
    
    return (
        <nav className='topnav'>
            <ul className='navlist'>
                <li className="navitem" title="Home">
                    <Link to="/">
                        <img src='../../comptia-logo.svg' alt="CompTIA Logo" />
                    </Link>
                </li>
                {/* // TODO Add links w/ ReactRouter to make the navbar function */}
                <li className="navitem">
                    <Link to="/info">                    
                        Course Info
                    </Link>    
                </li>
                <li className="navitem">
                    <Link to="/coursera">
                        Coursera
                    </Link>
                </li>
                <li className="navitem">
                    <Link to="/learn">
                        CertMaster Learn
                    </Link>    
                </li>
                <li className="navitem">
                    <Link to="/practice">CertMaster Practice</Link>
                </li>
                <li className="navitem">
                    <Link to="/admin">Admin</Link>
                </li>
                <li className="navitem">
                    <button className='login' onClick={toggleTheme}>
                        { theme === 'light' ? 'Dark Theme' : 'Light Theme'}
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;