import Navbar from "./navbar";
import ModesBtn from "./modeSwitcher";

function App() {
  return (
    <div font-sans mx-5 xl:mx-auto xl:px-5 class="max-w-[1820px]">
      <Navbar />
      <ModesBtn />
    </div>
  );
}

export default App;
