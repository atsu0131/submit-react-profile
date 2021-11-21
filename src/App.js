import { First } from "./components/First";
import { Second } from "./components/Second";
import "./Normalize.css"
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/work" element={<Second />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

