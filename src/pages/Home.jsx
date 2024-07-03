import { useState, useEffect } from 'react'
import { Section } from '../components/Section';
import Header from '../components/Header';
import anime from 'animejs';
import '../index.css';
import './Home.css';

export function Home() {

    // anime({
    //     targets: '.accent',
    //     value: [0, 157],
    //     round: 1,
    //     easing: 'easeInOutExpo',
    //     scale: 1.2
    // });

    // const [ isHidden, setIsHidden ] = useState(false);
    // const [ previousSrollPosition, setPreviousScrollPosition ] = useState(0);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const currentScrollPosition = window.scrollY;
    //         setIsHidden(previousSrollPosition < currentScrollPosition && currentScrollPosition > 150);
    //         setPreviousScrollPosition(currentScrollPosition);
    //     }

    //     window.addEventListener('accent', handleScroll);

    //     return () => window.removeEventListener('accent', handleScroll);
    // }, [previousSrollPosition]);

    return (
        <Header>
            <div className="content">
                <h1><span className="orange-gradient">YWCA</span> TechLab</h1>
                <h2>Begin Your Career in  <span className="orange-gradient">IT</span></h2>
                {/* <p><input className={`${isHidden ? '' : 'accent'} orange-gradient`} value="0" readOnly="readOnly" />Certificates Earned This Year</p> */}
            </div>
            {/* <img src='/src/assets/YWCA_Logo_1000x760.jpg' alt="YWCA Logo" width="50%" height="50%" style={{borderRadius:"50px"}} /> */}
        </Header>
    )
}

export default Home;