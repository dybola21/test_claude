import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Ticker } from "./components/Ticker";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimonials";
import { Location } from "./components/Location";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div id="topo" className="bg-ivory font-body text-noir">
      <Header />
      <main>
        <Hero />
        <Ticker />
        <Services />
        <About />
        <Testimonials />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
