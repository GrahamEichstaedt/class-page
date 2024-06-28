import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import './Section.css';


export function Section({children}) {

    const [ isInView, setIsInView ] = useState(false);
    const { ref, inView } = useInView({ threshold: 0.5 });


    useEffect(() => {
        if(inView && !isInView) {
            setIsInView(true);
        }
    }, [ inView, isInView ])

    return (
        <section className={`screen ${isInView ? 'section-animation' : ''}`}  ref={ref} >
            {children}
        </section>
    )
}

export default Section;
