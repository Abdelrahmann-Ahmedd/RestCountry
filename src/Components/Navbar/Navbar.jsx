import React from 'react';
import "./Navbar.css";

function Navbar() {

    return (
        <nav className='container-fluid p-3 bg-dark shadow-lg text-white d-flex justify-content-between'>
            <div className="leftSide ps-5 ">
                <h1 className='fs-4 fw-semibold'>Where in the world?</h1>
            </div>
            <div className="rightSide pe-5 d-flex  align-items-center">
                <i className="fa-regular fa-moon fa-xl"></i>
                <p className='m-auto ms-3 fs-6 fw-normal'>Dark Mode</p>
            </div>
        </nav>
    )
}

export default Navbar;
