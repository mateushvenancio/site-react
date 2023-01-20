import { useState } from 'react';
import DatleContext from './DatleContext';
import Painel from './Painel';
import Style from './style';
import Teclado from './Teclado';

export default function Datle() {
    const [atual, setAtual] = useState('');
    const [tentativas, setTentativas] = useState([]);
    const [certo, setCerto] = useState(1969);
    const [end, setEnd] = useState(false);

    return (
        <div style={Style.app}>
            <DatleContext.Provider
                value={{
                    atual,
                    setAtual,
                    tentativas,
                    setTentativas,
                    certo,
                    setCerto,
                    end,
                    setEnd,
                }}
            >
                <Toolbar />
                <hr style={Style.largura} />
                <Title />
                <Painel />
                <Teclado />
            </DatleContext.Provider>
        </div>
    );
}

function Toolbar() {
    return <div style={Style.toolbar}>DATLE</div>;
}

function Title() {
    return <div style={Style.title}>“THE MOON LANDING„</div>;
}
