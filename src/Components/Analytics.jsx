/* eslint-disable react/no-unescaped-entities */
import Laptop from "../assets/laptop.jpg";

function Analytics() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="laptop" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">React Library Quick Start</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            The library for web and native user interfaces
          </h1>
          <p
            className="
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-3 first-letter:float-left
"
          >
            React is a popular JavaScript library for building user interfaces.
            It provides a component-based architecture that allows developers to
            create reusable UI elements. React's virtual DOM efficiently updates
            and renders only the necessary components, resulting in faster and
            more efficient web applications. With its robust ecosystem and
            extensive community support, React has become a go-to choice for
            developers when building modern and interactive web applications.
          </p>
          <button className="bg- bg-black hover:bg-sky-700 text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
