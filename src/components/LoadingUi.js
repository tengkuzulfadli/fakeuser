import React, { useState, useEffect } from 'react';
import './LoadingUi.css';

function LoadingUi(){

    return(
        <>
            <div className="loader">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </>
    );
}

export default LoadingUi;