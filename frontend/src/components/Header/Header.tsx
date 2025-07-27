import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faPaperclip,
  faContactBook,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import useTheme from "../../hooks/useTheme";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header>
      <div className="header-container">
        <div className="header-title">
          <a href="#">James Young</a>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#about">
                About <FontAwesomeIcon icon={faInfoCircle} />
              </a>
            </li>
            <li>
              <a href="#resume">
                Resume <FontAwesomeIcon icon={faPaperclip} />
              </a>
            </li>
            <li>
              <a href="#contact">
                Contact <FontAwesomeIcon icon={faContactBook} />
              </a>
            </li>
          </ul>
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === "dark" ? (
              <FontAwesomeIcon icon={faMoon} />
            ) : (
              <FontAwesomeIcon icon={faSun} />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
