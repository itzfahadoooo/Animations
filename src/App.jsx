import "./App.css";
import { motion } from "motion/react";
const App = () => {
  return (
    <div className="app">
      <motion.div
        animate={{ rotate: 200, transition: { duration: 2 } }}
        className="test"
      ></motion.div>

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 2 } }}
        className="test"
      ></motion.button>

      <motion.div
        animate={{
          scale: 1.5,
          transition: { duration: 2 },
        }}
        className="test"
      ></motion.div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => console.log("hover started!")}
        className="test"
      ></motion.button>

      <motion.div
        initial={{ scale: 0 }}
        whileInView={{
          scale: 1,
          backgroundColor: "rgb(255, 0, 0)",
          opacity: 1,
          transition: { duration: 2 },
        }}
        className="test"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          scale: 1,
          backgroundColor: "rgb(255, 0, 0)",
          opacity: 1,
          transition: { duration: 2 },
        }}
        className="test"
      ></motion.div>

      <motion.div
        animate={{
          scale: [1, 1.5, 1.5, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
        className="test"
      ></motion.div>

      <motion.div
        /**
         * Setting the initial keyframe to "null" will use
         * the current value to allow for interruptable keyframes.
         */
        whileHover={{
          scale: [null, 1.1, 1.6],
          transition: {
            duration: 0.5,
            times: [0, 0.6, 1],
            ease: ["easeInOut", "easeOut"],
          },
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        className="test"
      ></motion.div>

      <motion.div
        drag
        whileDrag={{ scale: 1.2, backgroundColor: "#f00" }}
        className="test"
      ></motion.div>
      <div className="test"></div>
      <div className="test"></div>
      <div className="test"></div>
      <div className="test"></div>
      <div className="test"></div>

      <div className="relative mx-auto grid h-32 w-96 place-content-center">
        <h1 className="relative z-0 text-3xl font-black uppercase">
          Show me on scroll
        </h1>
        <motion.div
          initial={{
            opacity: 1,
          }}
          whileInView={{
            opacity: 0,
          }}
          viewport={{
            //   once: true,
            //   margin: "-200px",



            
            amount: "all",
          }}
          onViewportEnter={() => console.log("Enter!")}
          onViewportLeave={() => console.log("Exit!")}
          className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-indigo-500"
        />
      </div>
    </div>
  );
};

export default App;
