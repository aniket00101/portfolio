import { HeroMain } from "./components/heroSection/HeroMain";
import Navbarmain from "./components/navbar/Navbarmain";

function App() {
  return (
    <main className="font-body pt-4"> 
      <Navbarmain />
      <HeroMain />
    </main>
  );
}

export default App;
