import Header from '../components/Header';
import Section from "../components/Section";
import '../index.css';

export function Coursera() {

    return (
        <>
            <Header>
                <h1>Coursera</h1>
            </Header>
            <Section>
                <h2>Coursera</h2>
                <article>
                    <p>All of Google IT will be offered through Coursera. These courses <em>MUST</em> be taken in order. Each course builds off of the previous courses, so if you try to skip to IT Security, for example, you will not have any of the prerequisite knowledge to success in the course.  Below are links to each of the five courses.</p>
                    <nav>
                        <ul>
                            <li>
                                <a href="https://www.coursera.org/learn/computer-networking/home/week/1">Technical Support Fundamentals</a>
                            </li>
                            <li>
                                <a href="https://www.coursera.org/learn/computer-networking/home/week/1">The Bits and Bytes of Computer Networking</a>
                            </li>
                            <li>
                                <a href="https://www.coursera.org/learn/os-power-user/home/module/1">Operating Systems and You: Becoming a Power User</a>
                            </li>
                            <li>
                                <a href="https://www.coursera.org/learn/os-power-user/home/module/1">Systems Administration and IT Infrastructure Services</a>
                            </li>
                            <li>
                                <a href="https://www.coursera.org/learn/it-security/home/module/1">IT Security: Defense Against the Digital Dark Arts</a>
                            </li>
                        </ul>
                    </nav>
                </article>
            </Section>
        </>
    )
}

export default Coursera;