import { useState, CSSProperties } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

// const override: CSSProperties = {
//   display: "block",

// };

export default function PreLoader() {
  //   let [loading, setLoading] = useState(true);
  //   let [color, setColor] = useState("#ffffff");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "black",
        paddingBottom: "8rem",
      }}
      className="sweet-loading"
    >
      {/* <button onClick={() => setLoading(!loading)}>Toggle Loader</button> */}
      {/* <input
        value={color}
        onChange={(input) => setColor(input.target.value)}
        placeholder="Color of the loader"
      /> */}
      <img
        src="./logocpm.PNG"
        alt="name"
        style={{
          height: "100px",
          maxWidth: "120px",
          paddingLeft: "15px",
          paddingBottom: "15px",
        }}
      />
      <PropagateLoader
        color="#dc3fe9"
        // loading={loading}
        // cssOverride={override}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier={1}
      />
    </div>
  );
}
