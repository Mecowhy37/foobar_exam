import React from "react";
import { Bar } from "react-chartjs-2";
// import { useState, useEffect } from "react";

const ChartsManager = ({ taps, prices }) => {
  const singleName = [];

  const mapLevels = taps.map((level) => {
    const mapPrices = prices.find((price) => level.beer === price.name);

    singleName.push(level.beer);

    return ((2500 - level.level) / 50) * mapPrices.price;
  });
  console.log(mapLevels);
  console.log(singleName);

  const state = {
    labels: singleName,
    datasets: [
      {
        label: "Beers",
        backgroundColor: ["rgba(187, 152, 239, 0.4)", "rgba(193, 174, 159, 0.4)", "rgba(137, 147, 124, 0.4)", "rgba(113, 91, 100, 0.4)", "rgba(105, 56, 92, 0.4)", "rgba(255, 166, 134, 0.4)", "rgba(0, 166, 166, 0.4"],
        hoverBackgroundColor: ["rgba(187, 152, 239)", "rgba(193, 174, 159)", "rgba(137, 147, 124)", "rgba(113, 91, 100)", "rgba(105, 56, 92)"],
        borderColor: "#bb98ef",
        data: mapLevels,
      },
    ],
  };

  return (
    <div className="Charts">
      <p>Revenue per beer</p>
      <Bar
        className="Pie"
        data={state}
        options={{
          responsive: true,
          title: {
            display: true,
            text: "Beers serving at the moment",
          },
          legend: {
            display: true,
            position: "bottom",
            labels: {
              fontSize: 40,
            },
          },
        }}
      />
    </div>
  );
};

export default ChartsManager;
