import { Html, useProgress } from "@react-three/drei";

const CanvasLoader: React.FC = () => {
  const { progress } = useProgress();
  
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="relative flex items-center justify-center">
        <div className="w-24 h-24 border-4 border-t-4 border-blue-500 border-opacity-50 rounded-full animate-spin"></div>
        <span className='absolute text-white text-lg font-bold'>{progress.toFixed(2)}%</span>
      </div>
    </Html>
  );
};

export default CanvasLoader;
