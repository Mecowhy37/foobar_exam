const TileBartenders = ({ name, status, detail, tap }) => {
  status = status.toLowerCase();

  if (detail === "pourBeer") {
    detail = "pouring beer";
  } else if (detail === "receivePayment") {
    detail = "receiving payment";
  } else if (detail === "reserveTap") {
    detail = "preparing to pour beer";
  } else if (detail === "releaseTap") {
    detail = "finishing to pour beer";
  } else if (detail === "startServing") {
    detail = "started serving";
  } else if (detail === "changeKeg") {
    detail = "changing the keg";
  }

  return (
    <div className="Tile_Bartenders">
      <h2>{name} </h2>
      <p>is currently {status}.</p>
      <p>
        He is {detail}
        {tap === null ? ".." : " from the tap "}
        {tap}.
      </p>
    </div>
  );
};

export default TileBartenders;
