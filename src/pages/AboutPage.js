import React from 'react';
import '../index.css';

import Hero from '../components/Hero'
import Content from '../components/Content'

function AboutPage(props) {
    return (
        <div>
            <Hero title = {props.title}/>
            <Content>
                <div className='about-text'>
                Hello, my name is Amartya. I am a student at the University of California, Irvine. I am currently pursuing a degree in Computer Science. I will be graduating in June of 2021, after which I will be looking for a full-time role as a Software Developer.<br></br><br></br>
                In my free time I enjoy watching and playing soccer. My favourite team is Liverpool Football Club from England.
                </div>
            </Content>
        </div>
    );
}

export default AboutPage;