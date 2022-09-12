import React from "react";
import cardlist from "../data/cards.json";
import { Link } from 'react-router-dom';

const Cards = () => (
    <div className="cardlist">
        {cardlist.map((current,index)=>{
            const graphImage = require('../data/' + current.image + '.png');
            return (
                <div className="card-container" >
                    <Link to={current.url} key={index} >
                        <img src={graphImage} className={`card-image ${current.imageClass}`}/>
                        <div className="card-details">
                            {current.name}<br/>
                            {current.date}<br/>
                        </div>
                    </Link>
                </div>
            );
        })}
    </div>
);

export default Cards;