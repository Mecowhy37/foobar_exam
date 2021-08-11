const TileQueue = ({ id, order }) => {
  // order = order.join(", ");

  const orders = order;


  var counts = {};
  orders.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1;
  });


  return (
    <div className="Tile_Queue">
      <p>
        <b>Order no. {id}</b>
      </p>
      {Object.entries(counts).map(([key, value], index) => {
        return <p className="QueueList" key={index}>{`${value} ${key} `}</p>;
      })}
    </div>
  );
};

export default TileQueue;
