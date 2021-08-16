const GuideModal = ({ setModal, setOrders, ready, setReady }) => {
  return (
    <div className="guideModal">
      {ready.length > 0 ? (
        <>
          <h1>{`Order${ready.length === 1 ? ` ${ready} is` : `'s ${ready.join(" and ")} are`} ready!`}</h1>
          <button
            className="ok"
            onClick={() => {
              setModal(false);
              setOrders((prev) => {
                return prev.map((el) => {
                  if (!ready.includes(el)) {
                    return el;
                  } else {
                    return null;
                  }
                });
              });
              setReady([]);
            }}
          >
            <h1>claim</h1>
          </button>
        </>
      ) : (
        <>
          <h1>Welcome in Foobar!</h1>
          <p className="pcopy">
            yall can order beers
            <br />
            and we will bring them to you
            <br />
            after you press 'place order'
          </p>
          <button className="ok" onClick={() => setModal(false)}>
            <h1>okey lets get some</h1>
          </button>
        </>
      )}
    </div>
  );
};

export default GuideModal;
