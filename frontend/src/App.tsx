import Header from "./components/Header/Header";
import Overview from "./components/Overview/Overview";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Overview />
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  );
};

export default App;
