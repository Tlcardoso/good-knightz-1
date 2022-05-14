import GlobalStyles from "./styles/GlobalStyles";
import Home from "./components/pages/Home";
import ProtectDiscord from "./components/pages/ProtectDiscord";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <ProtectDiscord />
    </div>
  );
}

export default App;
