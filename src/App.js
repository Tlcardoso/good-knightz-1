import GlobalStyles from "./styles/GlobalStyles";
import Home from "./components/pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <GlobalStyles />

      <Header />

      {/* SECTIONS */}
      <Home />
    </div>
  );
}

export default App;
