import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Speakers from "./components/Speakers";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Agenda from "./components/Agenda";
import Content from "./components/Content";
import Subscription from "./components/Subscription";

export default function App() {
  return (
    <div className="page-container">
      <Hero />
      <Counter />
      <Agenda />
      <Speakers />
      <Content />
      <About />
      <Subscription />
      <Footer />
    </div>
  );
}
