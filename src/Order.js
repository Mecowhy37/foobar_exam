const Order = ({ handlePosting, orders, missing, filled, payments }) => {
  return (
    <div className="Order">
      {orders.length > 0
        ? orders.map((order) => (
            <h1 key={order} className="orderNumber">
              {order}
            </h1>
          ))
        : ""}
      <button className={`PlaceOrderButton ${missing.length > 0 || filled.length === 0 ? "disable" : ""} `} onClick={handlePosting}>
        Place Order
      </button>
    </div>
  );
};

export default Order;
