import React from 'react';

import Hero from '../components/Hero'
import Content from '../components/Content'

function AboutPage(props) {
    return (
        <div>
            <Hero title = {props.title}/>
            <Content>
                Hello, my name is Amartya. I am a student at the University of California, Irvine.
            </Content>
        </div>
    );
}

export default AboutPage;