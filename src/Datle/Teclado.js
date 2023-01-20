import { useContext, useEffect } from 'react';
import DatleContext from './DatleContext';
import Style from './style';

export default function Teclado() {
    const { atual, setAtual, setTentativas } = useContext(DatleContext);

    const numerosCima = [1, 2, 3, 4];
    const numerosMeio = [5, 6, 7, 8];
    const numerosBaixo = [9, 0];

    function handleNumero(item) {
        if (atual.length === 4) return;
        setAtual((anterior) => anterior + item);
    }

    function handleEnter() {
        if (atual.length !== 4) return;

        setTentativas((old) => [...old, parseInt(atual)]);
        setAtual('');
    }

    function handleDelete() {
        if (!atual || atual.length === 0) return;
        setAtual((ant) => ant.substring(0, ant.length - 1));
    }

    function handleTeclado(event) {
        if (parseInt(event.key) >= 0) {
            handleNumero(event.key);
            return;
        }

        if (event.key === 'Enter') {
            handleEnter();
            return;
        }

        if (event.key === 'Backspace') {
            handleDelete();
            return;
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleTeclado);
        return () => document.removeEventListener('keydown', handleTeclado);
    });

    return (
        <div style={{ ...Style.blockClick, ...Style.tecladoPadding }}>
            <div style={{ ...Style.coluna, ...Style.flexGap }}>
                <div style={{ ...Style.linha, ...Style.flexGap }}>
                    {numerosCima.map((item) => (
                        <div onClick={() => handleNumero(item)}>
                            <Tecla data={item} />
                        </div>
                    ))}
                </div>
                <div style={{ ...Style.linha, ...Style.flexGap }}>
                    {numerosMeio.map((item) => (
                        <div onClick={() => handleNumero(item)}>
                            <Tecla data={item} />
                        </div>
                    ))}
                </div>
                <div style={{ ...Style.linha, ...Style.flexGap }}>
                    <div onClick={handleEnter}>
                        <Enter />
                    </div>
                    {numerosBaixo.map((item) => (
                        <div onClick={() => handleNumero(item)}>
                            <Tecla data={item} />
                        </div>
                    ))}
                    <div onClick={handleDelete}>
                        <Delete />
                    </div>
                </div>
            </div>
        </div>
    );
}

function Tecla({ data }) {
    return <div style={Style.tecla}>{data}</div>;
}

function Enter() {
    return <div style={Style.tecla}>✔</div>;
}

function Delete() {
    return <div style={Style.tecla}>⌫</div>;
}
