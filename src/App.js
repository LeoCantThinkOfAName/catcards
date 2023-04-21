import "./App.css";

import Cats from "./cat";

function App() {
  return (
    <div className="App">
      {Cats.map((cat) => (
        <div className="card" key={cat.breed}>
          <img className="card-img-top" src={cat.img} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{cat.breed}</h5>
            <h6 className="card-subtitle">
              {cat.color} {cat.sex} {cat.age}
            </h6>
            <p className="card-text">{cat.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
