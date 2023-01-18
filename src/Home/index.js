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

export default function Home() {
    return (
        <div className="App App-header">
            <div className="LinhaHome">
                <img src={eu} alt="eu" className="Imagem" />
                <div className="Coluna">
                    <span className="Nome">
                        <span className="Verde">M</span>ateus{" "}
                        <span className="Verde">V</span>
                        enâncio
                    </span>
                    <div className="Icones">
                        <Icone
                            url={"https://github.com/mateushvenancio"}
                            icon={faGithub}
                        />
                        •
                        <Icone
                            url={"https://www.linkedin.com/in/mateushvenancio/"}
                            icon={faLinkedin}
                        />
                        •
                        <Icone
                            url={"https://www.instagram.com/mateushvenancio/"}
                            icon={faInstagram}
                        />
                        •
                        <Icone
                            url={"https://medium.com/@mateushvenancio"}
                            icon={faMediumM}
                        />
                        •
                        <Icone
                            url={
                                "https://gitconnected.com/mateushvenancio/resume"
                            }
                            icon={faFileLines}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function Icone({ url, icon }) {
    return (
        <a href={url} target="_blank" rel="noreferrer" className="Link">
            <FontAwesomeIcon icon={icon} />
        </a>
    );
}
