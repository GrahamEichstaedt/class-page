import Header from "../components/Header";
import Section from "../components/Section";
import anime from "animejs";
import '../index.css';

export function Info() {
    

    // anime({
    //     targets: '.screen',
    //     elasticity: 
    // })
    

    return (
        <>
            <Header>
                <h1>Course Info</h1>
            </Header>
            <Section>
                <h2>Overview</h2>
                <p>
                    The TechLab's IT Track is broken into two parts: Google IT and CompTIA. All students have the opportunity
                    to earn 5 certificates and 1 certification from Google IT and 1 certification from CompTIA A+. Although CompTIA A+
                    only offers a single certification, that certification is very valuable and is in high demand in the Rockford area. 
                </p>
                <p>
                    On the other hand, our Tech Track is geared towards teaching coding skills, specifically in Front End 
                    Web Development. As of summer 2024, we have moved away from W3Schools, so our web development classes
                    will be taught through FreeCodeCamp.org going forward.
                </p>
            </Section>
            <section className="grid-section">

                <div className="course-container">
                    <h2>IT Track</h2>
                    <div className="it-courses">
                        <figure>
                            <img src="/src/assets/google-logo.png" alt="Google & CompTIA Logos" />
                            <figcaption><a href="https://www.coursera.org/programs/yw-tech-lab-google-it-support-tcxl4">Google IT Support</a></figcaption>
                        </figure>
                        <figure>
                            <img src="/src/assets/comptia-logo-no-bg.png" alt="CompTIA Logo" />
                            <figcaption><a href="https://www.comptia.org/certifications/a">CompTIA A+</a></figcaption>
                        </figure>
                    </div>
                </div>
                <div className="course-container">
                    <h2>Tech Track</h2>
                    <figure>
                        <img src="/src/assets/free-code-camp-logo.png" alt="FreeCodeCamp Logo" />
                        <figcaption><a href="https://www.freecodecamp.org/">FreeCodeCamp.org</a></figcaption>
                    </figure>
                </div>
            </section>
            <Section>
                <h2>Google IT</h2>
                    <p>
                        Google IT is comprised of 5 certificates in separate but related subject 
                        areas. The courses build off each other, so however tempting it may be, 
                        please do not jump into any of the later modules without completing 
                        all the modules that come before it. These certificates are: 
                    </p>
                        <ol>
                            <li>
                                <details>
                                    <summary>Technical Support Fundamentals</summary>
                                    <p>Computer Hardware, Customer Service, Troubleshooting, etc.</p>
                                </details>
                                
                            </li>
                            <li>
                                <details>
                                    <summary>The Bits and Bytes of Computer Networking</summary>
                                    <p>Networking, the TCP/IP model, DNS, DHCP, and more</p>
                                </details>
                            </li>
                            <li>
                                <details>
                                    <summary>Operating Systems and You: Becoming a Power User</summary>
                                    <p>Powershell, Bash, Batch, Linux, and more</p>
                                </details>
                            </li>
                            <li>
                                <details>
                                    <summary>Systems Administration and IT Infrastructure Services</summary>
                                    <p>Virtualization, Remote Access Technology, Active Directory, Backups, and more</p>
                                </details>
                            </li>
                            <li>
                                <details>
                                    <summary>IT Security: Defense Against the Digital Dark Arts</summary>
                                    <p>Cybersecurity, RADIUS, Kerberos, TACACS+, Best Practices, and more</p>
                                </details>
                            </li>
                        </ol>
                        <p>Upon completion of all 5 certificates, you will be awarded the <strong>Google IT Support Professional Certification.</strong> These will make an excellent addition to your resumes.</p>
            </Section>
            <Section>
                <h2>CompTIA A+</h2>
                <p>CompTIA A+ is the most in demand IT certification in Rockford for entry level IT professionals. It is broken into two parts (Core 1 & Core 2). Core 1 will mostly cover hardware, networking, and virtualization, while Core 2 covers software troubleshooting, operating systems, scripting, and security.</p>
                <p>CompTIA exams are challenging, so it would be wise to study as you progress through the course. Waiting until the last minute to start studying hasn't gone well for past students.</p>
            </Section>
        </>

    )
}

export default Info;