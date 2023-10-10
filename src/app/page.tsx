import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

type TypeIcon = { icon: any; text: string; link: string };

export default function Home() {
    return (
        <>
            <div className="max-w-[700px] m-auto pt-24 px-4 text-black-400">
                <Header />
                <About />
            </div>
        </>
    );
}

export function Header() {
    return (
        <div className="border-dashed border-b-2 py-8">
            <Toast />
            <h1 className="text-4xl font-bold">Mateus Venâncio</h1>
            <h2 className="text-3xl">Developer</h2>
            <br />
            <div className="grid gap-y-1">
                <HomeIcon
                    icon={faEnvelope}
                    text="contato@mateusvenancio.com.br"
                    link="google.com"
                />
                <HomeIcon
                    icon={faLinkedin}
                    text="/mateushvenancio"
                    link="google.com"
                />
                <HomeIcon
                    icon={faGithub}
                    text="/mateushvenancio"
                    link="google.com"
                />
            </div>
            <div className="border-dotted"></div>
        </div>
    );
}

export function Toast() {
    return (
        <div className="bg-primary w-fit text-white px-4 py-2 rounded-tr-lg rounded-tl-lg rounded-br-lg mb-2 hover:ml-2 transition-all">
            Olá, eu sou
        </div>
    );
}

export function HomeIcon({ icon, text, link }: TypeIcon) {
    return (
        <a href={link} className="hover:text-primary hover:pl-2 transition-all">
            <FontAwesomeIcon icon={icon} className="pr-2" />
            {text}
        </a>
    );
}

export function About() {
    return (
        <>
            <div className="text-lg font-bold">About</div>
            <div className="flex flex-row items-center py-2">
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Eligendi deserunt libero quaerat accusamus commodi vel
                    magnam veritatis cumque, aliquid soluta. Consequatur dolores
                    rem neque suscipit molestiae ab perferendis iure quaerat.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Eligendi deserunt libero quaerat accusamus commodi vel
                    magnam veritatis cumque, aliquid soluta. Consequatur dolores
                    rem neque suscipit molestiae ab perferendis iure quaerat.
                </p>
            </div>
        </>
    );
}
