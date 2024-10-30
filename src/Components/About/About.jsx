import React from 'react';
import "./About.css";

function About(props) {

    let capital = props.card.capital;
    let region = props.card.region;
    let population = props.card.population;
    let flagSrc = props.card.flags.svg;
    console.log(props)
    return (
        <div className="about p-5 text-white position-absolute bg-dark d-flex flex-column align-items-center">
            <button className='btn btn-dark bg-danger me-auto btn-lg mb-3' onClick={props.back}><i className=' fa-solid fa-arrow-left-long'></i> Back</button>
            <div className="content container ">
                <div className="row d-flex justify-content-between">
                    <div className="col-lg-6">
                        <figure>
                            <img src={flagSrc} alt={props.card.name.common+" flag"} />
                        </figure>
                    </div>
                    <div className="col-lg-6">
                        <div className="caption h-100">
                            <h2 className='mb-3'>{props.card.name.common}</h2>
                            <ul className=' list-unstyled d-flex flex-column '> 
                                {/* <li>{"Native Name: "+props.card.name.nativeName.eng.common}</li> */}
                                <li>{"Population: "+population}</li>
                                <li>{"Region: "+region}</li>
                                <li>{"Sub Region: "+props.card.subregion}</li>
                                <li>{"Capital: "+capital}</li>
                                <li>{"Top Level Domain: "+props.card.tld}</li>
                                <li>{"Currencies: "+Object.keys(props.card.currencies).map((cur)=> {return cur})}</li>
                                <li className='w-50'>{"Languages: "+Object.keys(props.card.languages).map((lang)=> {return props.card.languages[lang]+" "})}</li>
                            </ul>
                            <h6 className=' opacity-50 d-flex flex-wrap'>
                                Border Countries: 
                            {props.card.borders ? props.card.borders.map((cont)=>{return  <button className=' text-opacity-50 ms-3 ps-2 pe-2 btn btn-dark shadow'>{cont}</button>}):" None"}
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
