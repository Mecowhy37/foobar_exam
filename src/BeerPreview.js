import ButtonPlus from "./ButtonPlus";
import ButtonMinus from "./ButtonMinus";
import Images from "./images/index";

const BeerPreview = ({ beers, prices, details, focus, onClick }) => {
  // console.log(onClick);
  if (beers.length === 0 || prices.length === 0 || details.length === 0) {
    return null;
  }
  let focusedBeer = beers[focus];
  let beerDet = details.find((el) => el.name === focusedBeer.beer);
  let beerPrice = prices.find((el) => el.name === focusedBeer.beer);
  let imgName = beerDet.name.toLowerCase().replace(/ /g, "");

  return (
    <div className="Beer_Preview">
      <div className="Beer_Label">
        <ButtonMinus onClick={onClick} />
        <div className="Image_Container">
          <img src={Images[imgName]} alt="none"></img>
          <div className="Amount_Block">
            <span className="Animated_Amount">3</span>
          </div>
        </div>
        <ButtonPlus onClick={onClick} />
      </div>
      <div className="Beer_Desc">
        <div className="Extra_Info">
          <p className="Alc">{beerDet.alc + "%"}</p>
          <p className="Category">{beerDet.category}</p>
          <p className="Price">{beerPrice.price + "kr."}</p>
        </div>
        <div className="TextDesc">
          <p className="Aroma">
            <b>Aroma: </b>
            <span className="Aroma_API">{beerDet.description.aroma}</span>
          </p>
          <p className="Appearance">
            <b>Appearance: </b>
            <span className="Appearance_API">{beerDet.description.appearance}</span>
          </p>
          <p className="Flavor">
            <b>Flavor: </b>
            <span className="Flavor_API">{beerDet.description.flavor}</span>
          </p>
          <p className="Mouthfeel">
            <b>Mouthfeel: </b>
            <span className="Mouthfeel_API">{beerDet.description.mouthfeel}</span>
          </p>
          <p className="Impression">
            <b>Impression: </b>
            <span className="Impression_API">{beerDet.description.overallImpression}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BeerPreview;
