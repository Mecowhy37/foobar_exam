const LiveChat = () => {
  return (
    <div className="liveChat">
      <div className="messages">
        <div className="mes">
          <p>table 1: </p>
          <p>Yo</p>
        </div>
        <div className="mes">
          <p>table 2: </p>
          <p>,|,,</p>
        </div>
        <div className="mes">
          <p>table 5: </p>
          <p>has anyone seen a girl with eyeglasses?</p>
        </div>
        <div className="mes">
          <p>table 3: </p>
          <p>I dont sell drugs</p>
        </div>
      </div>
      <div className="userInput">
        <input type="text"></input>
        <button>send</button>
      </div>
    </div>
  );
};
export default LiveChat;
