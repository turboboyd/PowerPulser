import  Lottie from "lottie-react";
import animationData from "./Animation.json";

const Loader = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: 'transparent',
        zIndex: 10,
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
