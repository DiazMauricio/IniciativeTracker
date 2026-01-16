import InitiativesControls from "./InitiativesControls";
import DisplayInitiatives from "./DisplayInitiatives";
import { useState } from "react";
import NewWindow from "react-new-window";

const InitiativeWindows = ({ initiatives }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [show, setShow] = useState(true);

  const nextIndex = () => {
    let newIndex = activeIndex + 1;
    const validItems = initiatives.filter((item) => item.initiative !== "");
    if (newIndex >= validItems.length) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  const prevIndex = () => {
    let newIndex = activeIndex - 1;
    const validItems = initiatives.filter((item) => item.initiative !== "");
    if (newIndex < 0) {
      newIndex = validItems.length - 1;
    }
    setActiveIndex(newIndex);
  };

  const showActive = () => {
    setShow(!show);
  };

  return (
    <div className="display-container">
      <InitiativesControls
        initiatives={initiatives}
        nextIndex={nextIndex}
        prevIndex={prevIndex}
        showActive={showActive}
        show={show}
      />
      <NewWindow title="Initiative" features={{ width: 400, height: 2080 }}>
        <div className={`column display ${show ? "show" : ""}`}>
          <DisplayInitiatives
            initiatives={initiatives}
            activeInitiative={activeIndex}
          />
        </div>
      </NewWindow>
    </div>
  );
};

export default InitiativeWindows;
