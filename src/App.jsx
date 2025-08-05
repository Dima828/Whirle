import "./App.css";
import About from "./components/About/About";
import Advantages from "./components/Advantages/Advantages";
import Baner from "./components/Baner/Baner";
import Blog from "./components/Blog/Blog";
import Companies from "./components/Companies/Companies";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Possibilites from "./components/Possibilites/Possibilites";
import Started from "./components/Started/Started";
import Tasks from "./components/Tasks/Tasks";
import Track from "./components/Track/Track";

function App() {
  return (
    <>
      <Header />
      <main>
        <Baner />
        <Companies />
        <Advantages />
        <Possibilites />
        <About />
        <Track />
        <Tasks />
        <Blog />
        <Started />
      </main>
      <Footer />
    </>
  );
}

export default App;
