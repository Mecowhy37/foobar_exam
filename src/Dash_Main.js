import Charts from "./Charts";
import Counter from "./Counter";
import ThemeToggle from "./ThemeToggle";
import TileQueue from "./TileQueue";
import TileServing from "./TileServing";
import TileBartenders from "./TileBartenders";
import ChartsManager from "./ChartsManager";
import ManagerRevenue from "./ManagerRevenue";
import CircleLoader from "react-spinners/CircleLoader";
// import { useState } from "react";

const DashMain = ({ themeToggler, theme, data, beerTypes, display, displayToggle, prices }) => {
  if (data.length !== 0) {
    const mapQueue = data.queue.slice(0, 5).map((single) => {
      // if (data.queue.length <= 5) {
      return <TileQueue key={single.id} id={single.id} order={single.order} />;
      // }
    });

    // console.log(data.queue.length);

    const mapServing = data.serving.map((single) => {
      // eslint-disable-next-line
      const mapServer = data.bartenders.map((barnames) => {
        if (Object.values(barnames).includes(single.id)) {
          return barnames.name;
        }
      });

      return <TileServing key={single.id} id={single.id} order={single.order} name={mapServer} />;
    });

    const mapWorkers = data.bartenders.map((workers) => {
      return <TileBartenders key={workers.id} name={workers.name} status={workers.status} detail={workers.statusDetail} tap={workers.usingTap} />;
    });

    return (
      <div className="Dash_Main">
        <button className="Manager_Button" onClick={displayToggle}>
          Managers Panel
        </button>

        <div className="Dashboard_Content">
          <Charts serving={data.serving} />
          <div className="Waiting_Customers">
            <p>Customers in a queue:</p>
            {mapQueue}
          </div>
          <div className="Bartenders">{mapServing}</div>
          <Counter count={data.serving[0] === undefined ? 0 : data.serving[0].order.length} />
        </div>

        <div className={`Manager_Content ${display ? "" : "Display_None"}`}>
          <ChartsManager taps={data.taps} prices={prices} />
          <div className="Manager_Workers">{mapWorkers}</div>
          <ManagerRevenue taps={data.taps} prices={prices} />
          <ThemeToggle Click={themeToggler} theme={theme} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="Loader">
        <CircleLoader color="#fff" size="150" />
      </div>
    );
  }
};

export default DashMain;
