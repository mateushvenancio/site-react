import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faInstagram,
    faMedium,
} from "@fortawesome/free-brands-svg-icons";
import "./App.css";
import eu from "./eu.webp";

function App() {
    return (
        <div className="App App-header">
            <div className="Linha">
                <img src={eu} alt="eu" className="Imagem" />
                <div className="Coluna">
                    <span className="Nome">
                        <span className="Verde">M</span>ateus{" "}
                        <span className="Verde">V</span>
                        enâncio
                    </span>
                    <div className="Icones">
                        <a
                            href="https://github.com/mateushvenancio"
                            target="_blank"
                            rel="noreferrer"
                            className="Link"
                        >
                            <FontAwesomeIcon
                                onClick={() => {}}
                                icon={faGithub}
                            />
                        </a>
                        •
                        <a
                            href="https://www.linkedin.com/in/mateushvenancio/"
                            target="_blank"
                            rel="noreferrer"
                            className="Link"
                        >
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        •
                        <a
                            href="https://www.instagram.com/mateushvenancio/"
                            target="_blank"
                            rel="noreferrer"
                            className="Link"
                        >
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        •
                        <a
                            href="https://medium.com/@mateushvenancio"
                            target="_blank"
                            rel="noreferrer"
                            className="Link"
                        >
                            <FontAwesomeIcon icon={faMedium} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
