import React from 'react';

import amar from '../assets/images/amar.jpeg'
import pool from '../assets/images/pool.gif'
import resume from '../assets/images/resume.jpeg'
import github from '../assets/images/github.png'
import Card from '../components/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import Card2 from '../components/Card2'


class Carousel2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Resume',
                    subTitle: 'Professional Resume',
                    imgSrc: resume,
                    link: 'https://drive.google.com/file/d/15HyGuHQNwewBRwwyC_h1aY9rXLa4jujA/view?usp=sharing',
                    selected: false
                }
                
            ]

        }
    }

    handleCardClick = (id) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true; 

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card2 item={item} click = {() => this.handleCardClick(item.id)} key={item.id} />
        })
    }

    render()
    {
        return (
            <Container fluid={true}>
                <Row className = 'justify-content-around'>
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }

}

export default Carousel2;