import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faInstagram,
    faMediumM,
} from "@fortawesome/free-brands-svg-icons";
import "./App.css";
import eu from "./eu.webp";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import Barra from "./Barra";

export default function Home() {
    return (
        <div className="App App-header">
            <Barra />
            <div className="Linha Expand">
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
                            <FontAwesomeIcon icon={faMediumM} />
                        </a>
                        •
                        <a
                            href="https://gitconnected.com/mateushvenancio/resume"
                            target="_blank"
                            rel="noreferrer"
                            className="Link"
                        >
                            <FontAwesomeIcon icon={faFileLines} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
