import "./Footer.css";
import { faGithub, faReact, faCss3 } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span>
          Built with React <FontAwesomeIcon icon={faReact} /> and CSS{" "}
          <FontAwesomeIcon icon={faCss3} />
        </span>
        <a href="https://github.com/jamesyoung-15/jyyoung" target="_blank">
          Source code on Github <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
