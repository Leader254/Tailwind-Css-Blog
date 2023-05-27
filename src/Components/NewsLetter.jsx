function NewsLetter() {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-1xl sm:text-xl text-xl font-medium py-2">
            Stay up to date with the latest trends and advancements in React as
            we explore topics such as component development, state management,
            performance optimization, and responsive design.
          </h1>
          <p>Sign Up to our newsletter and stay up-to-date</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 rounded-md text-black w-full"
              type="email"
              placeholder="Enter your email.."
            />
            <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">
              Notify Me
            </button>
          </div>
          <p>
            We care about privacy of your data. Read our{" "}
            <span className="text-[#00df9a]">Privacy policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
