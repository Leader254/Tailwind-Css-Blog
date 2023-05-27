import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaGithubSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold cursor-pointer text-[#00df9a]">SAM.</h1>
        <p className="py-4">
          Get ready for deep dives into popular libraries and frameworks that
          complement React, such as Redux, React Router, and Styled Components.
          Discover how these tools can enhance your development workflow and
          empower you to build scalable and maintainable applications.
        </p>
        <div className="flex md:w-[75%] my-6  justify-between">
          <FaFacebookSquare className="cursor-pointer" size={30} />
          <FaInstagram className="cursor-pointer" size={30} />
          <FaTwitterSquare className="cursor-pointer" size={30} />
          <FaGithubSquare className="cursor-pointer" size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium cursor-pointer text-gray-400">Solutions</h6>
          <ul className="cursor-pointer">
            <li className="py-2 text-sm">Web Design</li>
            <li className="py-2 text-sm">Software Design</li>
            <li className="py-2 text-sm">Graphics Design</li>
            <li className="py-2 text-sm">Software Installation</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium cursor-pointer text-gray-400">Quick Links</h6>
          <ul className="cursor-pointer">
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Team</li>
            <li className="py-2 text-sm">Careers</li>
            <li className="py-2 text-sm">Contact Us</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium cursor-pointer text-gray-400">Reach Out</h6>
          <ul className="cursor-pointer">
            <li className="py-2 text-sm">Web Design</li>
            <li className="py-2 text-sm">Software Design</li>
            <li className="py-2 text-sm">Graphics Design</li>
            <li className="py-2 text-sm">Software Installation</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
