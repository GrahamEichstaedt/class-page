import '../index.css';
import './Header.css';


/**
 * 
 * @param {*} param0 
 * @returns 
 */
export function Header({children}) {



    return (
        <div className="header-wrapper">
            <header className="header">
                <h1>CompTIA <span className="light-theme secondary">A+</span></h1>
                <p>Rockford's #1 Entry Level IT Certification</p>
            </header>
        </div>
    )
}

export default Header;