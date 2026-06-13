import "./App.css";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Highlights from "./Components/Highlights";
import Features from "./Components/Features";
import RecentBooks from "./Components/RecentBooks";
import Explore from "./Components/Explore";
import Footer from "./Components/Footer";


function App() {
  return (
    <>
      <section id="landing">
        <Nav />
        <Header />
      </section>

      <main>
        <Highlights />
        <Features />
        <RecentBooks />
        <Explore />
      </main>

      <Footer />
    </>
  );
}

export default App;