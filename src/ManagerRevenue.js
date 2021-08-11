import React from "react";
// import { useState, useEffect } from "react";



const ManagerRevenue = ({ taps, prices }) => {

    const mapLevels = taps.map((level) => {
        const mapPrices = prices.find((price) => level.beer === price.name);
        return ((2500 - level.level) / 50) * mapPrices.price;
    });
    const total = mapLevels.reduce((a, b) => a + b, 0);


    return (
        <div className="Manager_Revenue">
            <p>Today`s revenue is</p>
            <h2>{total} DKK</h2>
        </div>
    );
};

export default ManagerRevenue;
