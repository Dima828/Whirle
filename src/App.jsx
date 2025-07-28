import "./App.css";
import Advantages from "./components/Advantages/Advantages";
import Baner from "./components/Baner/Baner";
import Companies from "./components/Companies/Companies";
import Header from "./components/Header/Header";
import Possibilites from "./components/Possibilites/Possibilites";

function App() {
  return (
    <>
      <Header />
      <Baner />
      <Companies />
      <Advantages />
      <Possibilites />
    </>
  );
}

export default App;
