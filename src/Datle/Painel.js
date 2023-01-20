import { useContext } from 'react';
import DatleContext from './DatleContext';
import Style from './style';

export default function Painel() {
    const { tentativas } = useContext(DatleContext);
    return (
        <div style={Style.blockClick}>
            <div style={{ ...Style.coluna, ...Style.flexGap }}>
                {tentativas.map((item) => (
                    <Ano ano={item} />
                ))}
                <Tentativa />
            </div>
        </div>
    );
}

function Ano({ ano }) {
    const novoAno = ('' + ano).padStart(4, '0');
    return (
        <div style={{ ...Style.linha, ...Style.flexGap }}>
            <Icone tentado={ano} />
            <Digito digito={novoAno[0]} />
            <Digito digito={novoAno[1]} />
            <Digito digito={novoAno[2]} />
            <Digito digito={novoAno[3]} />
            <Icone tentado={ano} />
        </div>
    );
}

function Digito({ digito }) {
    return (
        <div style={{ ...Style.digito, ...Style.digitoAno }}>
            {digito || ''}
        </div>
    );
}

function Tentativa() {
    const { atual } = useContext(DatleContext);

    return (
        <div style={{ ...Style.linha, ...Style.flexGap }}>
            <DigitoTentativa digito={atual[0]} />
            <DigitoTentativa digito={atual[1]} />
            <DigitoTentativa digito={atual[2]} />
            <DigitoTentativa digito={atual[3]} />
        </div>
    );
}

function DigitoTentativa({ digito }) {
    return <div style={Style.digito}>{digito || ''}</div>;
}

function Icone({ tentado }) {
    const { certo } = useContext(DatleContext);
    if (tentado > certo) return <div>▼</div>;
    return <div>▲</div>;
}
