import "./App.css";
import Item from "./Components/Item";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div id="GoodMorningMessage">
        <p>
          Good Morning! <br />
          Here is what we recommend you should wear today:
        </p>
      </div>
      <Item />
    </div>
  );
}

export default App;
