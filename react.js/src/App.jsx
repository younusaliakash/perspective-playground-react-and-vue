import { useState } from "react";
import "./App.css";

function App() {
  const [properties, setProperties] = useState({
    perspective: 100,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
  });

  const handleOnchange = (event) => {
    setProperties({ ...properties, [event.target.name]: event.target.value });
  };

  const style = {
    transform: `perspective(${properties.perspective}px) rotateX(${properties.rotateX}deg) rotateY(${properties.rotateY}deg) rotateZ(${properties.rotateZ}deg)`,
  };

  const reset = () => {
    setProperties({
      perspective: 100,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
    });
  };

  return (
    <main>
      <form>
        <section className="settings">
          <div className="settings-container">
            <label>perspective: {properties.perspective} px;</label>
            <input
              type="range"
              min="0"
              max="999"
              name="perspective"
              onChange={handleOnchange}
            />

            <label>rotateX: {properties.rotateX} deg; </label>
            <input
              type="range"
              min="-180"
              max="180"
              name="rotateX"
              onChange={handleOnchange}
            />

            <label>rotateY: {properties.rotateY} deg; </label>
            <input
              type="range"
              min="-180"
              max="180"
              name="rotateY"
              onChange={handleOnchange}
            />

            <label>rotateZ: {properties.rotateZ} deg; </label>
            <input
              type="range"
              min="-180"
              max="180"
              name="rotateZ"
              onChange={handleOnchange}
            />

            <button style={{ color: "black" }} type="button" onClick={reset}>
              Reset
            </button>
          </div>
        </section>
      </form>
      <section className="output">
        <div className="box-container">
          <div className="box" style={style}></div>
        </div>
      </section>
    </main>
  );
}

export default App;
