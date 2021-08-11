import Images from "./images/index";

const DashHeader = ({ display, data }) => {
  if (data.length !== 0) {
    const level = data.taps.map((single) => {
      return single;
    });

    function displayStock(string) {
      var found = level.find((name) => name.beer === string);
      if (found) {
        // console.log(found.beer + " found");
        return found.level + "/2500";
      } else {
        // console.log(string + " not found");
        return "finished!";
      }
    }
    const storage = data.storage.map((oneBeer) => {
      return oneBeer;
    });
    function displayStorage(string) {
      let found = storage.find((name) => name.name === string);
      if (found) {
        return found.amount;
      } else {
        return 0;
      }
    }

    return (
      <div className="Dash_Header">
        <div className={`Image_Box`}>
          <img className={`${display ? "Stock" : ""} ${displayStock("Mowintime") === "finished!" ? `Unavail` : ""}`} src={Images[Object.keys(Images)[5]]} alt="" />
          {display ? (
            <div className="Stock_Text">
              <p>Mowintime</p>
              <p>Keg level: {displayStock("Mowintime")}</p>
              <p>{displayStorage("Mowintime")} kegs left</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={`Image_Box`}>
          <img className={`${display ? "Stock" : ""} ${displayStock("Row 26") === "finished!" ? `Unavail` : ""}`} src={Images[Object.keys(Images)[6]]} alt="" />
          {display ? (
            <div className="Stock_Text">
              <p>Row 26</p>
              <p>Keg level: {displayStock("Row 26")}</p>
              <p>{displayStorage("Row 26")} kegs left</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={`Image_Box`}>
          <img className={`${display ? "Stock" : ""} ${displayStock("Ruined Childhood") === "finished!" ? `Unavail` : ""}`} src={Images[Object.keys(Images)[7]]} alt="" />
          {display ? (
            <div className="Stock_Text">
              <p>Ruined Childhood</p>
              <p>Keg level: {displayStock("Ruined Childhood")}</p>
              <p>{displayStorage("Ruined Childhood")} kegs left</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={`Image_Box`}>
          <img className={`${display ? "Stock" : ""} ${displayStock("Sleighride") === "finished!" ? `Unavail` : ""}`} src={Images[Object.keys(Images)[8]]} alt="" />
          {display ? (
            <div className="Stock_Text">
              <p>Sleighride</p>
              <p>Keg level: {displayStock("Sleighride")}</p>
              <p>{displayStorage("Sleighride")} kegs left</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={`Image_Box`}>
          <img className={`${display ? "Stock" : ""} ${displayStock("Steampunk") === "finished!" ? `Unavail` : ""}`} src={Images[Object.keys(Images)[9]]} alt="" />
          {display ? (
            <div className="Stock_Text">
              <p>Steampunk</p>
              <p>Keg level: {displayStock("Steampunk")}</p>
              <p>{displayStorage("Steampunk")} kegs left</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  } else {
    return "";
  }
};
export default DashHeader;
