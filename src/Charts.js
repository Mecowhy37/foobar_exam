import React from "react";
import { Pie } from "react-chartjs-2";
// import { useState, useEffect } from "react";

const Charts = ({ serving }) => {
    //mapping through servings
    const mapOrders = serving.map((singleOrder) => singleOrder.order);
    var mergedOrders = [].concat.apply([], mapOrders);
    // console.log(mergedOrders);
    // counting duplicate entries
    var counts = {};
    mergedOrders.forEach(function (x) {
        counts[x] = (counts[x] || 0) + 1;
    });
    // console.log(counts);

    const state = {
        labels: Object.keys(counts),
        datasets: [
            {
                label: "Beers",
                backgroundColor: ["rgba(187, 152, 239, 0.4)", "rgba(193, 174, 159, 0.4)", "rgba(137, 147, 124, 0.4)", "rgba(113, 91, 100, 0.4)", "rgba(105, 56, 92, 0.4)", "rgba(255, 166, 134, 0.4)", "rgba(0, 166, 166, 0.4"],
                hoverBackgroundColor: ["rgba(187, 152, 239)", "rgba(193, 174, 159)", "rgba(137, 147, 124)", "rgba(113, 91, 100)", "rgba(105, 56, 92)"],
                borderColor: "#bb98ef",
                data: Object.values(counts),
            },
        ],
    };

    return (
        <div className="Charts">
            <p>Served right now</p>
            <Pie
                className="Pie"
                data={state}
                options={{
                    responsive: true,
                    title: {
                        display: true,
                        text: "Beers serving at the moment",
                        fontSize: 20,
                    },
                    legend: {
                        display: true,
                        position: "bottom",
                    },
                }}
            />
        </div>
    );
};

export default Charts;
