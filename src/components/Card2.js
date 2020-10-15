import React from 'react';
import CardInfo from '../components/CardInfo'

function Card2(props) {
    return (
        <div className = 'd-inline-block a-card' onClick={() => props.click() }>
            <img className = 'a-card-image2' src = {props.item.imgSrc}/> 
            {props.item.selected && <CardInfo title = {props.item.title} subTitle = {props.item.subTitle} link = {props.item.link}/>}
        </div>
    )
}

export default Card2;