import { useState, useEffect } from 'react';

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../index.css';
import './Nav.css';
import { FaBars } from "react-icons/fa";

export function Nav({theme, toggleTheme}) {

    const [ isHidden, setIsHidden ] = useState(false);
    const [ previousSrollPosition, setPreviousScrollPosition ] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPosition = window.scrollY;
            setIsHidden(previousSrollPosition < currentScrollPosition && currentScrollPosition > 150);
            setPreviousScrollPosition(currentScrollPosition);
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [previousSrollPosition]);
    
    return (
        <nav className={`topnav ${isHidden ? 'hidden' : ''}`} >
            <ul className='navlist'>
                <li className="navitem" title="Home">
                    <Link className="navlink" to="/">
                        <img src='../../comptia-logo.svg' alt="CompTIA Logo" />
                    </Link>
                </li>
                <li className="navitem">
                    <Link className="navlink" to="/info">                    
                        Course Info
                    </Link>    
                </li>
                <li className="navitem">
                    <Link className="navlink" to="/coursera">
                        Coursera
                    </Link>
                </li>
                <li className="navitem">
                    <Link className="navlink" to="/certmaster-learn">
                        CertMaster Learn
                    </Link>    
                </li>
                <li className="navitem">
                    <Link className="navlink" to="/certmaster-practice">CertMaster Practice</Link>
                </li>
                <li className="navitem">
                    <Link className="navlink" to="exams">Exams</Link>
                </li>
                {/* <li className="navitem">
                    <Link className="navlink" to="/admin">Admin</Link>
                </li> */}
                {/* <li className="navitem">
                    <button className='login' onClick={toggleTheme}>
                        { theme === 'light' ? 'Dark Theme' : 'Light Theme'}
                    </button>
                </li> */}

            </ul>
        </nav>
    )
}

export default Nav;