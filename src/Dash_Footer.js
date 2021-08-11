import Images from "./images/index";

const DashFooter = ({ display, data }) => {
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
      return oneBeer
    });
    function displayStorage(string) {
      let found = storage.find((name) => name.name === string);
      if (found) {
        return found.amount
      } else {
        return 0;
      }
    }

    return (
      <div className="Dash_Footer">
        <div className={`Image_Box`}>
          <img className={`${display ? "Stock" : ""} ${displayStock("El Hefe") === "finished!" ? `Unavail` : ""}`} src={Images[Object.keys(Images)[0]]} alt="" />
          {display ? (
            <div className="Stock_Text">
              <p>El Hefe</p>
              <p>Keg level:{displayStock("El Hefe")}</p>
              <p>{displayStorage("El Hefe")} kegs left</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={`Image_Box`}>
          <img className={`${display ? "Stock" : ""} ${displayStock("Fairy Tale Ale") === "finished!" ? `Unavail` : ""}`} src={Images[Object.keys(Images)[1]]} alt="" />
          {display ? (
            <div className="Stock_Text">
              <p>Fairy Tale Ale</p>
              <p>Keg level:{displayStock("Fairy Tale Ale")}</p>
              <p>{displayStorage("Fairy Tale Ale")} kegs left</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={`Image_Box`}>
          <img className={`${display ? "Stock" : ""} ${displayStock("GitHop") === "finished!" ? `Unavail` : ""}`} src={Images[Object.keys(Images)[2]]} alt="" />
          {display ? (
            <div className="Stock_Text">
              <p>GitHop</p>
              <p>Keg level:{displayStock("GitHop")}</p>
              <p>{displayStorage("GitHop")} kegs left</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={`Image_Box`}>
          <img className={`${display ? "Stock" : ""} ${displayStock("Hollaback Lager") === "finished!" ? `Unavail` : ""}`} src={Images[Object.keys(Images)[3]]} alt="" />
          {display ? (
            <div className="Stock_Text">
              <p>Hollaback Lager</p>
              <p>Keg level:{displayStock("Hollaback Lager")}</p>
              <p>{displayStorage("Hollaback Lager")} kegs left</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={`Image_Box`}>
          <img className={`${display ? "Stock" : ""} ${displayStock("Hoppily Ever After") === "finished!" ? `Unavail` : ""}`} src={Images[Object.keys(Images)[4]]} alt="" />
          {display ? (
            <div className="Stock_Text">
              <p>Hoppily Ever After</p>
              <p>Keg level:{displayStock("Hoppily Ever After")}</p>
              <p>{displayStorage("Hoppily Ever After")} kegs left</p>
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
export default DashFooter;

// {`Dash_Grid_Container ${theme ? "Dark_Theme" : "Light_Theme"}`} style={{ overflow: "hidden" }}
