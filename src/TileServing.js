const TileServing = ({ id, order, name }) => {
  const orders = order;


  var counts = {};
  orders.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1;
  });

  return (
    <div className="Tile_Serving">
      <h2>{name}</h2>
      <p>
        is pouring order <h2>{id}</h2>
      </p>
      {Object.entries(counts).map(([key, value], index) => {
        return <p className="QueueList" key={index}>{`${value} ${key} `}</p>;
      })}
    </div>
  );
};

export default TileServing;
