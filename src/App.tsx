import Header from "./components/ui/Header";
import Hero from "./components/sections/Hero";
import ProblemSolution from "./components/sections/ProblemSolution";
import HowItWorks from "./components/sections/HowItWorks";
import Benefits from "./components/sections/Benefits";
import CTA from "./components/sections/CTA";
import AppShowcase from "./components/sections/AppShowcase";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="w-full max-w-[1440px] mx-auto">
        <Header />
        <main className="flex-grow">
          <Hero />
          <ProblemSolution />
          <div id="how-it-works">
            <HowItWorks />
          </div>
          <AppShowcase />
          <div id="benefits">
            <Benefits />
          </div>
          <CTA />
        </main>
      </div>
    </div>
  );
}

export default App;
