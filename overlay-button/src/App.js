import "./styles.css";
import data from "./data";
import Button from "./buttonComp";

export default function App() {
  return (
    <>
      <svg width={0} height={0}>
        <filter id="filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".01"
            numOctaves={6}
          />
          <feDisplacementMap in="SourceGraphic" scale={100} />
        </filter>
      </svg>
      <div className="wrapper">
        {data.map((item) => (
          <Button key={item.id} id={item.id} color={item.color} />
        ))}
      </div>
    </>
  );
}
