import "./App.css";
import InitiativeWindows from "./InitiativeWindow";
import InitiativesControls from "./InitiativesControls";
import ScenePicker from "./ScenePicker";
import { InitiativeProvider } from "./context/InitiativeContext";
import SizeBar from "./SizeBar";
import { SceneProvider } from "./context/SceneContext";

function App() {
  return (
    <>
      <InitiativeProvider>
        <SceneProvider>
          <div className="app">
            <SizeBar />
            <ScenePicker />
            <div className="line-v" />
            <InitiativesControls />
            {/* Windows */}
            <InitiativeWindows />
          </div>
        </SceneProvider>
      </InitiativeProvider>
    </>
  );
}

export default App;
