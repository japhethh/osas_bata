import Congratulation from "./components/Congratulation";
import Form from "./components/form/Form";
import Forms from "./components/form/Form";
import Home from "./components/home/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="max-w-[420px] relative mx-auto px-4">
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
