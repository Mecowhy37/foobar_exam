export default function BeerList({ beers, clickHandler, focus }) {
  return (
    <div className="Beer_List">
      <ul>
        {beers.map((beer, index) => {
          return (
            <li key={beer.id} className={index === focus ? "focus" : ""} onClick={clickHandler}>
              {beer.beer}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
