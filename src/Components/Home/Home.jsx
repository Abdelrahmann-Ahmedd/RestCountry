import axios from 'axios';
import "./Home.css";
import React, { useEffect, useState } from 'react';
import Card from './../Card/Card';
import About from '../About/About';

function Home() {

    const [counteries, setCounteries] = useState([]);
    const [baseCounteries, setBaseCounteries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [region , setRegion] = useState("all");
    const [cardDetails , setCardDetails] = useState(null);
    

    function searchByName(e) {
        let input = e.target.value
        if (input !== "" ) {
            input.trim();
            input = input.toLowerCase()
            let newCounteries = JSON.parse(JSON.stringify(baseCounteries)); 
            let searchedCountry =  newCounteries.filter((country)=> { return country.name.common.toLowerCase().includes(input)})
            setCounteries(searchedCountry);
        }
        else {
            getAllCounteriesFromRegion(region);
        }
    }

    async function searchByRegion(e) {
        let selection = e.target.value;
        setRegion(selection);
        getAllCounteriesFromRegion(selection);
    }

    async function getAllCounteries() {
        setLoading(true);
            await axios.get("https://restcountries.com/v3.1/all").then((x)=> {
            setLoading(false);
            setCounteries(x.data);
            setBaseCounteries(x.data);
        });
    }

    async function getAllCounteriesFromRegion(name) {
        if (name === "all") {
            setLoading(true);
            await axios.get("https://restcountries.com/v3.1/all").then((x)=> {
            setLoading(false);
            setCounteries(x.data);
            setBaseCounteries(x.data);
            setRegion(name);
        });

        } else {
            setLoading(true);
            await axios.get("https://restcountries.com/v3.1/region/"+name).then((x)=> {
            setLoading(false);
            setCounteries(x.data);
            setBaseCounteries(x.data);
            setRegion(name);
        });
        }
    }

    function cardClose() {
        setCardDetails(null);
        getAllCounteries();
    }

    function showDetails(card) {
        console.log(card)
        setCardDetails(card);
        setCounteries([])
    }
    useEffect(() => {
        getAllCounteries();

    }, []);

    return (
        <div className="home container-fluid bg-dark p-5     ">
            <div className="homeContent">
                <div className='change w-100 d-flex justify-content-between'>
                    <div className="search d-flex mb-3 w-100 ps-5 ">
                        <input onKeyUp={searchByName} type="text" placeholder='Search' className='me-5 form-control w-75 ' required/>
                    </div>
                    <div className='w-50 pe-5'>
                        <select onChange={searchByRegion} name="region" id="rg" className=' w-100 ms-auto form-control bg-dark text-white'> 
                            <option value="all">all</option>
                            <option value="europe">Europe</option>
                            <option value="asia">Asia</option>
                            <option value="america">America</option>
                            <option value="africa">Africa</option>
                            <option value="Oceania">Oceania</option>
                        </select>
                    </div>
                </div>
                <div className="row gy-5">
                    {loading?<div className=' sp position-absolute bg-dark d-flex justify-content-center align-items-center'> 
                        <i className="fa-solid fa-circle-notch fa-5x fa-spin text-danger"></i>
                    </div>:counteries.map((country,ind) => <Card key={ind} details={country} onClick={() => showDetails(country)} />)}
                </div>
            </div>
            {cardDetails && <About card={cardDetails} back={cardClose} />}
        </div>
    );
}

export default Home;

