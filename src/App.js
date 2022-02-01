import GlobalStyles from "./styles/GlobalStyles";
import Home from "./components/sections/Home";

function App() {
  return (
    <div className="App">
      <GlobalStyles />

      {/* SECTIONS */}
      <Home />
    </div>
  );
}

export default App;
