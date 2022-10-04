import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills.jsx"
import Work from "./components/Work";


function App() {
  return (
    <div >
      <Navbar/>
      <Home/>
      <Skills/>
      <Work/>
      <h1 className='text-2xl'>Hello </h1>
    </div>
  );
}

export default App;
