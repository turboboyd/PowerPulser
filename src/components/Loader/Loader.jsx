import  Lottie from "lottie-react";
import animationData from "./Animation.json";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Lottie
        animationData={animationData}
        style={{ height: 500, width: 500 }}
      />
    </div>
  );
};

export default Loader;
