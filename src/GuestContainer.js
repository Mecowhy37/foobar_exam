import Form from "./Form";

const GuestContainer = ({ index, focusing, guest, basket, handleAdding, handlePayment, payments, formFocus, form, filled }) => {
  function summing(basket) {
    let result = 0;
    basket.forEach((beer) => {
      result += beer.amount * beer.price;
    });
    return result;
  }
  let missing = filled.filter((el) => !payments.includes(el));
  return (
    <div className={`Guest_Container ${Number(guest) === index ? "focus" : ""} ${payments.includes(index) ? "paid" : ""}`}>
      <div className="Basket_Container">
        {basket.length > 0 ? (
          basket.map((e, conInd) => {
            return (
              <div key={e.name} className={`Basket_Item ${payments.includes(index) ? "disable" : ""}`}>
                <p className="highOp">{e.name}</p>

                <div className="controls" data-index={conInd}>
                  <p data-act="-" onClick={handleAdding}>
                    -
                  </p>
                  <p className="amount highOp">{e.amount}</p>
                  <p data-act="+" onClick={handleAdding}>
                    +
                  </p>
                  <p className="remove" data-act="rm" onClick={handleAdding}>
                    remove
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <p style={{ textAlign: "center" }}>add beers</p>
        )}
      </div>
      <div className="Guest_Header" onClick={focusing} data-index={index}>
        <div className="Basket_Total" style={basket.length > 0 ? { justifyContent: "space-between" } : { justifyContent: "space-evenly" }}>
          <p className="Guest_Number">{"Guest " + index}</p>
          {basket.length > 0 ? <p className="Guest_Total_Amount">{`${payments.includes(index) ? "paid" : ""} ${summing(basket)},-`}</p> : null}
        </div>
      </div>

      <div className={`Guest_Form ${(Number(form) === Number(index) && Number(guest) === Number(index) && basket.length > 0) || (payments.includes(index) && Number(guest) === Number(index)) ? "open" : ""}`}>
        {payments.includes(index) ? (
          <div className="paid">
            <h1>cheers!</h1>
            {filled.length === payments.length ? (
              <p>{`you can place an order now${payments.length === 4 ? "." : ` or ${4 - filled.length} more guest${filled.length < 3 ? "s" : ""} can add beers!`}`}</p>
            ) : (
              <p>{`Guest ${missing} need to pay before placing an order.`}</p>
            )}
          </div>
        ) : (
          <Form handlePayment={handlePayment} index={index} />
        )}
      </div>

      {Number(guest) === index && basket.length > 0 && !payments.includes(index) ? (
        <p className={`tap ${Number(form) === index ? "close" : ""}`} onClick={formFocus} data-index={index}>
          {Number(form) === index ? "close" : "tap to pay"}
        </p>
      ) : null}
    </div>
  );
};
export default GuestContainer;
