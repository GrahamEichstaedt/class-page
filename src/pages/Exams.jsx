import core1Objs from '../assets/objectives-core1.pdf';
import core2Objs from '../assets/objectives-core2.pdf';
import Header from "../components/Header";
import Section from "../components/Section";

export function Exams() {

    return (
        <>
            <Header>
                <h1>Exams</h1>
            </Header>
            <Section>
                <h2>Exam Scoring</h2>
                <article>
                    <p>
                        Earning your CompTIA A+ Certification requires that you pass two exams - A+ Core 1 and A+ Core 2.
                        Core 1 covers the first 9 modules, while Core 2 covers the last 11 modules. Each exam has a maximum 
                        score of 900 points. A passing score on Core 1 is <strong>675 / 900</strong>, whereas a passing score on 
                        Core 2 is <strong>700 / 900</strong>.
                    </p>
                </article>
            </Section>
            <Section>
                <h2>Core 1 Exam Objectives</h2>
                <iframe src={core1Objs} frameborder="0" width="100%"></iframe>
            </Section>
            <Section>
                <h2>Core 2 Exam Objectives</h2>
                <iframe src={core2Objs} frameborder="0" width="100%"></iframe>
            </Section>
        </>
    )
}

export default Exams;