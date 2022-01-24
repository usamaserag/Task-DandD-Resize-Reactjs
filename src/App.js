import "./App.scss";
import Navbar from "./components/Navbar";
import Analytics from "./pages/Analytics";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Navbar />
        <Analytics />
      </div>
    </DndProvider>
  );
}

export default App;
