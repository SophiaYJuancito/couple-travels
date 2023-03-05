import React from "react";
import "./styles/homeStyles.css";
import cardlist from "../data/cards.json";
import { Link } from 'react-router-dom';

const Cards = () => (
    <div className="cardlist">
        <div className="next-meeting">
            <div className="countdown-container">
                {/* <div className="heart-shape"></div> */}
                <h2>Faltan:</h2>
                <ul className="countdown" target-date="2023-02-25, 22:40:00 GMT-5">
                    <li className="days dots">
                        <div className="number">0</div>
                        <div className="label">Días</div>
                    </li>
                    <li className="hours dots">
                        <div className="number">0</div>
                        <div className="label">Horas</div>
                    </li>
                    <li className="minutes dots">
                        <div className="number">0</div>
                        <div className="label">Min.</div>
                    </li>
                    <li className="seconds">
                        <div className="number">0</div>
                        <div className="label">Seg.</div>
                    </li>
                </ul>
                <h2>Para vernos :3</h2>
            </div>
        </div>
        {cardlist.map((current,index)=>{
            const graphImage = require('../data/' + current.image + '.png');
            // const itineraryImage = require('../travels/' + current.image + '/images/itinerary.png');
            return (
                <div key={index} className="card-container" >
                    {/* <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    ...
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <Link to={current.url} key={index} >
                        <img alt={`card-image-${index}`} src={graphImage} className={`card-image ${current.imageClass}`}/>
                        <div className="card-details">
                            {current.name}<br/>
                            {current.date}<br/>
                        </div>
                        M
                        {/* <div className="itinerary">
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                Launch demo modal
                            </button>
                        </div> */}
                    </Link>
                </div>
            );
        })}
    </div>
);

export default Cards;