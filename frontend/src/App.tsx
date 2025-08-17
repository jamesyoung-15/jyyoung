import Header from "./components/Header/Header";
import Overview from "./components/Overview/Overview";
import About from "./components/About/About";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Overview />
        <About />
      </main>
    </>
  );
};

export default App;
