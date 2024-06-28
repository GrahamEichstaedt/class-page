import { Section } from '../components/Section';
import Header from '../components/Header';
import '../index.css';
import './Home.css';

export function Home() {

    return (
        <Header>
            <div className="content">
                <h1><span className="orange-gradient">YW</span> TechLab</h1>
                <h2>Begin Your Career in  <span className="orange-gradient">IT</span></h2>
            </div>
            {/* <img src='/src/assets/YWCA_Logo_1000x760.jpg' alt="YWCA Logo" width="50%" height="50%" style={{borderRadius:"50px"}} /> */}
        </Header>
    )
}

export default Home;