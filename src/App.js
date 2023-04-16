import logo from "./logo.svg";
import "./App.css";
import Cats from "./cat";

function App() {
  return (
    <div className="App">
      {Cats.map((cat) => (
        <div class="card">
          <img class="card-img-top" src={cat.img} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">{cat.breed}</h5>
            <h6 class="card-subtitle">
              {cat.color} {cat.sex} {cat.age}
            </h6>
            <p class="card-text">{cat.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
