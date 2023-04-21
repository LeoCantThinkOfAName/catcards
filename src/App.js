import "./App.css";

import { CatCard } from "./components/CatCard";
import Cats from "./constants/cat";

function App() {
  return (
    <div className="App">
      <header className="text-center p-4">
        <h1 className="text-4xl font-bold">Stray cat rescue</h1>
        <span className="text-xs text-gray-400">
          (Although they're probably never step outside the house)
        </span>
      </header>
      <div className="flex flex-wrap justify-center">
        {Cats.map((cat) => (
          <CatCard cat={cat} key={cat.breed} />
        ))}
      </div>
    </div>
  );
}

export default App;
