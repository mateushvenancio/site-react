import { Link } from "react-router-dom";

export default function Barra() {
    return (
        <div className="Linha Barra">
            <BarraTile data={"HOME"} url={"/"} />
            <BarraTile data={"WEAVER"} url={"/weaver"} />
        </div>
    );
}

function BarraTile({ data, url }) {
    return <Link to={url}>{data}</Link>;
}
