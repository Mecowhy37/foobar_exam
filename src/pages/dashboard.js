import React, { useEffect, useState } from "react";
import DashHeader from "../Dash_Header";
import DashFooter from "../Dash_Footer";
import DashMain from "../Dash_Main";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard";
  });

  //fetching data

  const [queue, setQueue] = useState([]);
  const [beerTypes, setBeerTypes] = useState([]);
  const [display, displayToggle] = useState(false);
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    setInterval(() => {
      const abortController = new AbortController();
      const signal = abortController.signal;
      fetch("https://pivobar.herokuapp.com/", { signal: signal })
        .then((res) => res.json())
        .then((data) => {
          setQueue(data);
        });

      return function cleaup() {
        abortController.abort();
      };
    }, 7000);
  }, []);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    fetch("https://pivobar.herokuapp.com/beertypes", { signal: signal })
      .then((res) => res.json())
      .then((data) => {
        setBeerTypes(data);
      });

    return function cleaup() {
      abortController.abort();
    };
  }, []);
  if (queue !== []) {
  }

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    fetch("https://videogames-20c7.restdb.io/rest/foobar", {
      method: "get",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "x-apikey": "6074094df592f7113340efe3",
        "cache-control": "no-cache",
      },
      signal: signal,
    })
      .then((resPrice) => resPrice.json())
      .then((data) => {
        setPrices(data);
      });
    return function cleaup() {
      abortController.abort();
    };
  }, []);

  const [theme, themeToggle] = useState(true);

  return (
    <div className={`Dash_Grid_Container ${theme ? "Dark_Theme" : "Light_Theme"}`} style={{ overflow: "hidden" }}>
      <DashHeader display={display} data={queue} />
      <DashMain
        themeToggler={() => {
          themeToggle(!theme);
          console.log(theme);
        }}
        data={queue}
        theme={theme}
        beerTypes={beerTypes}
        display={display}
        prices={prices}
        displayToggle={() => {
          displayToggle(!display);
        }}
      />
      <DashFooter display={display} data={queue} />
    </div>
  );
};
export default Dashboard;
