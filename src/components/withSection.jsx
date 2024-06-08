import React from 'react';
import Section from './Section.jsx'

export const withSection = (Component) => (props) => {
    return <Section {...props}><Component {...props}/></Section>
}

export default withSection;
