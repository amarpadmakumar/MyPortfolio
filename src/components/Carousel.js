import React from 'react';

import amar from '../assets/images/amar.jpeg'
import pool from '../assets/images/pool.gif'
import github from '../assets/images/github.png'
import Card from '../components/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'LinkedIn',
                    subTitle: 'Profile',
                    imgSrc: amar,
                    link: 'https://www.linkedin.com/in/amartyapadmakumar/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'GitHub',
                    subTitle: 'GitHub Repository',
                    imgSrc: github,
                    link: 'https://github.com/amartyapadmakumar',
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
            return <Card item={item} click = {() => this.handleCardClick(item.id)} key={item.id} />
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

export default Carousel;