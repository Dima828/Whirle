import "./App.css";
import About from "./components/About/About";
import Advantages from "./components/Advantages/Advantages";
import Baner from "./components/Baner/Baner";
import Blog from "./components/Blog/Blog";
import Companies from "./components/Companies/Companies";
import Header from "./components/Header/Header";
import Possibilites from "./components/Possibilites/Possibilites";
import Tasks from "./components/Tasks/Tasks";
import Track from "./components/Track/Track";

function App() {
  return (
    <>
      <Header />
      <Baner />
      <Companies />
      <Advantages />
      <Possibilites />
      <About />
      <Track />
      <Tasks />
      <Blog />
    </>
  );
}

export default App;
