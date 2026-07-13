import {motion} from "framer-motion"

const App = () => {
  return (
    <div
      className="[prespective::1000px] [transform-style::preserve-3d] min-h-screen flex items-center justify-center bg-neutral-900"
      style={{
        backgroundImage:
          "radial-gradient(circle at 0.5px 0.5px, rgba(255,255,255,0.08) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <motion.button 
      // whileHover={{
      //   rotateX:80,
      //   rotateZ:10,
    
      // }}
      whileTap={{
        scale:1.5
      }}
      transition={{
        duration:0.3,
        ease:"easeInOut"
      }}
      className="group relative overflow-hidden rounded-lg bg-black px-10 py-4 text-3xl font-bold tracking-wider text-neutral-300 shadow-md cursor-pointer ">
        ISHI

        {/* Top line */}
        <span className="absolute h-0.5  w-1/2 -translate-x-1/2 left-1/2 bg-linear-to-r bottom-0 mx-auto from-transparent shadow-cyan-500 inset-x-2 via-cyan-500 to-transparent"></span>

        {/* Bottom line */}
        <span className="absolute bottom-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-linear-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
      </motion.button>
    </div>
  );
};

export default App;