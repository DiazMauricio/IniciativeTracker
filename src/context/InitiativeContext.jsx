import { createContext, useContext, useState } from "react";

const InitiativeContext = createContext();

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

export const InitiativeProvider = ({ children }) => {
  const [initiatives, setInitiatives] = useState(init);
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

  const onAdd = (index, data) => {
    let prevInitiatives = [...initiatives];
    prevInitiatives[index] = data;
    setInitiatives(prevInitiatives);
  };
  const addInitative = () => {
    setInitiatives([...initiatives, { name: "", initiative: "" }]);
  };
  const removeInitiative = () => {
    setInitiatives(initiatives.slice(0, -1));
  };
  const resetInitiatives = () => {
    setInitiatives(init);
  };

  const value = {
    initiatives,
    activeIndex,
    show,
    nextIndex,
    prevIndex,
    showActive,
    onAdd,
    addInitative,
    removeInitiative,
    resetInitiatives,
  };
  return (
    <InitiativeContext.Provider value={value}>
      {children}
    </InitiativeContext.Provider>
  );
};

export const useInitiative = () => {
  const context = useContext(InitiativeContext);

  if (!context) {
    throw new Error(
      "useInitiative debe usarse dentro de un InitiativeProvider",
    );
  }
  return context;
};
