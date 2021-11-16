import React, { useRef } from "react";
import useBackground from "../Hooks/useBackground";

const Background = () => {
  const mainRef = useRef();
  const ref1 = useRef();
  const ref2 = useRef();

  const { inBackground } = useBackground({
    mainRef: mainRef,
    targetRefs: [ref1, ref2]
  });

  return (
    <>
      <div
        ref={mainRef}
        style={{
          color: inBackground ? "white" : "black",
          height: "2rem",
          width: "100%",
          position: "fixed"
        }}
      >
        <p>header text (scroll to see magic)</p>
      </div>

      <div style={{ height: "100vh", width: "100%" }}></div>
      <div
        ref={ref2}
        style={{ height: "100vh", width: "100%", backgroundColor: "black" }}
      ></div>
      <div style={{ height: "100vh", width: "100%" }}></div>
      <div
        ref={ref1}
        style={{ height: "100vh", width: "100%", backgroundColor: "black" }}
      ></div>
    </>
  );
};

export default Background;
