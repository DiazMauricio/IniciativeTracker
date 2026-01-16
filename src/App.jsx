import { useState } from "react";
import "./App.css";
import InputInitiative from "./InputInitiative";
import InitiativeWindows from "./InitiativeWindow";
import InputControls from "./InputControls";

const init = [
  { name: "Kyrian", initiative: 12, color: "#0089fa", isPJ: true },
  { name: "Evandrin", initiative: 8, color: "#ab307e", isPJ: true },
  { name: "Afein", initiative: 15, color: "#3c4134", isPJ: true },
  { name: "Grog", initiative: 15, color: "#7a8f05", isPJ: true },
  { name: "Rough", initiative: 15, color: "#9a0d0d", isPJ: true },
  { name: "Zherakas", initiative: 15, color: "#403dff", isPJ: true },
  { name: "Raxter", initiative: 15, color: "#8247ff", isPJ: true },
  { name: "Daxter", initiative: 15, color: "#caa007", isPJ: true },
  { name: "Fenses", initiative: 15, color: "#b55b1f", isPJ: true },
];

function App() {
  const [initiatives, setInitiatives] = useState(init);

  const onAdd = (index, data) => {
    let prevInitiatives = [...initiatives];
    prevInitiatives[index] = data;
    setInitiatives(prevInitiatives);
  };

  return (
    <>
      <div className="app">
        <div className="column">
          <div className="Inputs-container">
            <InputControls
              initiatives={initiatives}
              setInitiatives={setInitiatives}
              init={init}
            />
            <div className="Inputs">
              <h1>Initiative Traker</h1>

              {initiatives.map((item, index) => (
                <InputInitiative
                  key={index}
                  index={index}
                  onAdd={onAdd}
                  item={item}
                />
              ))}
            </div>
          </div>
        </div>
        <InitiativeWindows initiatives={initiatives} />
      </div>
    </>
  );
}

export default App;
