import { BsFillMoonStarsFill } from "react-icons/bs";

const Navigation = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="py-10 mb-12 flex justify-between">
      <h1 className="text-xl font-burtons dark:text-red-600">developedbyred</h1>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer text-2xl dark:text-gray-400"
          />
        </li>
        <li>
          <a
            className="bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold px-6 py-3 ml-8"
            href="#contact-us"
          >
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
