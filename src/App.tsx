import Congratulation from "./components/Congratulation";
import Forms from "./components/form/Form";
import Home from "./components/home/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="max-w-[520px] relative mx-auto">
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Forms />} />
          <Route path="/congratulation" element={<Congratulation />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
