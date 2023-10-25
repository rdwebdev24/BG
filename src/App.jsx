import { Landing } from "./components/Landing";
import { Main } from "./components/Main";
import { Nav } from "./components/Nav";
import "./style/global.css";
function App() {
  return (
    <div className="App">
      {/* <Nav/> */}
      <Landing />
      <Main />
    
    </div>
  );
}

export default App;
