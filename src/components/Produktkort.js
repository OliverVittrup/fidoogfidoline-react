import{ Link } from "react-router-dom";
export default function ProduktAdminkort({ post }) {

    return (
        <div className="kort adminkort">
            <div className="tekst">
                <h3>{post.produktnavn}</h3>
                <p>{post.beskrivelse}</p>
                <hr />
                <p>Varighed: {post.varighed} min.</p>
                <p>Pris kr. {post.pris}</p>

                <button className="laesmereknap">Læs mere</button>
                
                <Link to={`/bestil/${post.id}`} className="bestilknap">Bestil</Link>
            </div>
        </div>
    );
}