// font awesome
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const currentYear = new Date().getFullYear();


function Footer() {
  return (
    <footer>
      <div className="container pt-4">
        <img src="images/home-bottom-img.jpg" alt="glasses on top of open laptop" width="100%" height="auto" />
      </div>
      <div className="flex flex-col items-center py-8 mt-4">
        <div className="flex gap-2 mb-2 text-3xl">
          
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Sheila-Ha/my-portfolio-react.git"
          >
            <FaGithub className="text-green-500" />
          </a>
          
          <a target="_blank" 
             rel="noreferrer" 
             href="https://www.linkedin.com/in/sheila-hanson/"
          >
            <FaLinkedin className="text-purple-700" />
          </a>
        </div>
        <p className="text-md">
          ©Copyright {currentYear} Sheila Hanson. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
