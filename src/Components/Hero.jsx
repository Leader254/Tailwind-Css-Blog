import Typed from "react-typed";
function Hero() {
  return (
    <div className="text-white">
      <div className=" mt-[-96px] w-full h-screen text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          First Project Using React Components.
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 ">
          Continous{" "}
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
            <span className="relative  text-white">Learning</span>
          </span>
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-3xl text-xl font-bold  py-4">
            Learning React Hooks Like,
          </p>
          <Typed
            className="md:text-5xl sm:text-3xl text-xl font-bold md:pl-4 pl-2 text-gray-500"
            strings={[
              "useState",
              "useEffect",
              "useContext",
              "useReducer",
              "useRef",
              "useMemo",
              "useCallback",
              "useLayoutEffect",
            ]}
            typeSpeed={120}
            backSpeed={130}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Visit the React Library Official website to learn more about React
          Hooks.
        </p>
        <button className="bg-[#00df9a]  hover:bg-sky-700 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
