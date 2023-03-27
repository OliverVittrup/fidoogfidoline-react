export default function Bestillingskort({ post }) {

    return (
        <div className="kort adminkort">
            <div className="tekst">
                <h3>{post.produkt}</h3>
                <p>{post.dato}</p>
                <p>{post.tid}</p>
                <p>{post.email}</p>
                <p>{post.mobil}</p>
                <p>{post.bynavn}</p>
                <p>{post.adresse}</p>
                <p>{post.postnr}</p>
                <p>{post.hundenavn}</p>
                <p>{post.hunderace}</p>
            </div>
        </div>
    );
}