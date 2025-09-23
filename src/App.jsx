import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Speakers from "./components/Speakers";
import Counter from "./components/Counter";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="page-container">
      <Hero />

      <Counter />

      <Speakers />

      <About />

      <Footer />
    </div>
  );
}
