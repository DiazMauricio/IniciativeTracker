import InitiativeBanner from "./InitiativeBanner";
import "./DisplayInitiative.css";

const DisplayInitiatives = ({ initiatives, activeInitiative }) => {
  const sortedInitiatives = [...initiatives].sort(
    (a, b) => b.initiative - a.initiative
  );
  return (
    <div className="DisplayInitiative">
      {sortedInitiatives.map((item, index) => {
        if (item.initiative !== "") {
          return (
            <InitiativeBanner
              key={index}
              index={index}
              name={item.name}
              color={item.color}
              isPJ={item.isPJ}
              active={activeInitiative == index}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default DisplayInitiatives;
