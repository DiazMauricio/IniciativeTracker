import { createContext, useContext, useState } from "react";
import SimpleScene from "../Scenes/SimpleScene";
import EaselDia from "../assets/images/EaselBgDia.png";
import EaselTarde from "../assets/images/EaselBgAtardecer.png";
import EaselNoche from "../assets/images/EaselBgAnochecer.png";
import EaselAmanecer from "../assets/images/EaselBgAmanecer.png";
import EaselGris from "../assets/images/EaselBgGrey.png";
import EaselRojo from "../assets/images/EaselBgRed.png";
import EaselChase from "../assets/images/EaselChase.png";
import AlgamelScene from "../Scenes/AlgamelScene";
import MainScene from "../Scenes/MainScene";

const SceneContext = createContext();

const scenes = [
  {
    title: "Main",
    scene: <MainScene key={0} />,
  },
  {
    title: "Easel Dia",
    scene: <SimpleScene key={1} src={EaselDia} />,
  },
  {
    title: "Easel Tarde",
    scene: <SimpleScene key={2} src={EaselTarde} />,
  },
  {
    title: "Easel Noche",
    scene: <SimpleScene key={3} src={EaselNoche} />,
  },
  {
    title: "Easel Amanecer",
    scene: <SimpleScene key={4} src={EaselAmanecer} />,
  },
  {
    title: "Easel Gris",
    scene: <SimpleScene key={5} src={EaselGris} />,
  },
  {
    title: "Easel Rojo",
    scene: <SimpleScene key={6} src={EaselRojo} />,
  },
  {
    title: "Algamel",
    scene: <AlgamelScene key={7} />,
  },
  {
    title: "Chase",
    scene: <SimpleScene key={8} src={EaselChase} />,
  },
];

export const SceneProvider = ({ children }) => {
  const [sceneIndex, setSceneIndex] = useState(0);

  const value = { sceneIndex, setSceneIndex, scenes };
  return (
    <SceneContext.Provider value={value}>{children}</SceneContext.Provider>
  );
};

export const useScene = () => {
  const context = useContext(SceneContext);

  if (!context) {
    throw new Error("useScene debe usarse dentro de un SceneProvider");
  }
  return context;
};
