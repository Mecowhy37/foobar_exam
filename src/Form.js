import moment from "moment";
const Form = ({ handlePayment, index }) => {
  function insertSpaces(e) {
    e.target.value = e.target.value
      .replace(/[^\dA-Z]/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
  }
  function insertSlash(e) {
    e.target.value = e.target.value
      .replace(/[^\dA-Z]/g, "")
      .replace(/(.{2})/, "$1/")
      .trim();
  }

  function paying(e) {
    e.preventDefault();
    handlePayment(index);
  }

  const handleCardValid = (e) => {
    if (e.target.value.length < 19) {
      e.target.setCustomValidity("noooooo");
    } else {
      e.target.setCustomValidity("");
    }
  };

  const handleExpValid = (e) => {
    let today = moment().format("MM/YY");
    let cardDate = e.target.value;
    let yearValid = cardDate.slice(3) >= today.slice(3) ? true : false;
    let monthValid = cardDate.slice(0, 2) >= today.slice(0, 2) ? true : false;
    if (moment(`${e.target.value}`, "MM/YY", true).isValid() && yearValid) {
      if (cardDate.slice(3) === today.slice(3)) {
        if (monthValid) {
          e.target.setCustomValidity("");
        } else {
          e.target.setCustomValidity("nooo!");
        }
      } else {
        e.target.setCustomValidity("");
      }
    } else {
      e.target.setCustomValidity("nooo!");
    }
  };
  const handleCvcValid = (e) => {
    e.target.value.length === 3 ? e.target.setCustomValidity("") : e.target.setCustomValidity("nooo!");
  };
  const handleNameValid = (e) => {
    e.target.value.length === 0 ? e.target.setCustomValidity("nooo!") : e.target.setCustomValidity("");
  };
  const checkValid = () => {
    document.querySelectorAll(".cardnumber")[index - 1].focus();
    document.querySelectorAll(".cardnumber")[index - 1].blur();
    document.querySelectorAll(".expdate")[index - 1].focus();
    document.querySelectorAll(".expdate")[index - 1].blur();
    document.querySelectorAll(".cvc")[index - 1].focus();
    document.querySelectorAll(".cvc")[index - 1].blur();
    document.querySelectorAll(".name")[index - 1].focus();
    document.querySelectorAll(".name")[index - 1].blur();
    return [...document.querySelectorAll("form")][index - 1].checkValidity();
  };
  return (
    <>
      <form noValidate key={index} id={`form${index}`}>
        <div className="Field">
          <label htmlFor={`cardnumber${index}`}>card number</label>
          <input type="text" id={`cardnumber${index}`} className="cardnumber" title="cardname" minLength="19" maxLength="19" placeholder="1234 1234 1234 1234" onChange={insertSpaces} onBlur={handleCardValid}></input>
          <span className="Error_Cardnumber">enter 16 digit</span>
        </div>
        <div className="Field">
          <label htmlFor={`name${index}`}>owner</label>
          <input type="text" id={`name${index}`} className="name" title="name" placeholder="John Doe" onBlur={handleNameValid}></input>
          <span className="Error_Name">must not be empty</span>
        </div>
        <div className="groupRow">
          <div className="Field">
            <label htmlFor={`expdate${index}`}>exp date</label>
            <input type="text" id={`expdate${index}`} className="expdate" title="expdate" maxLength="5" placeholder="MM/YY" onChange={insertSlash} onBlur={handleExpValid}></input>
            <span className="Error_Date">wrong format or expired</span>
          </div>

          <div className="Field">
            <label htmlFor={`cvc${index}`}>cvc</label>
            <input type="text" id={`cvc${index}`} className="cvc" title="cvc" placeholder="123" minLength="3" maxLength="3" onBlur={handleCvcValid}></input>
            <span className="Error_CVC">enter 3 digits</span>
          </div>
          <button
            className={`method Card_Pay`}
            onClick={(e) => {
              e.preventDefault();
              if (checkValid()) {
                console.log("was true");
                paying(e);
              } else {
                return;
              }
            }}
          >
            pay
          </button>
        </div>
      </form>
      <p className="or">or</p>
      <button className="method MobilePay" onClick={paying}></button>
    </>
  );
};

export default Form;
