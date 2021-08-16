const Order = ({ handlePosting, orders, missing, filled }) => {
  return (
    <div className="Order">
      <div className="numbersContainer">
        {orders.length > 0
          ? orders.map((order, index) => (
              <h1 key={index} className="orderNumber">
                {order}
              </h1>
            ))
          : null}
      </div>
      <button className={`PlaceOrderButton ${missing.length > 0 || filled.length === 0 ? "disable" : ""} `} onClick={handlePosting}>
        Place Order
      </button>
    </div>
  );
};

export default Order;
