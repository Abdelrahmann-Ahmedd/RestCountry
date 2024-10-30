import React from 'react';
import "./Card.css";

function Card(props) {
    let name = props.details.name.common;
    let capital = props.details.capital;
    let region = props.details.region;
    let population = props.details.population;
    let flagSrc = props.details.flags.png;

    return (
        <div className="col-xl-3 col-lg-4 col-md-6">
            <div onClick={props.onClick}  className="card bg-dark text-white shadow-lg">
                <img src={flagSrc} className="card-img-top" alt={name +" flag"}></img>
                <div className="card-body">
                    <h5 className="card-title mb-4">{name}</h5>
                    <h6 className="card-text fs-6 fw-light opacity-50">{"Population: "+population}</h6>
                    <h6 className="card-text fs-6 fw-light opacity-50">{"Region: "+region}</h6>
                    <h6 className="card-text fs-6 fw-light opacity-50">{"Capital: "+capital}</h6>
                </div>
            </div>
        </div>
    )
}

export default Card;
