function Card({ picture, desc, title, hiddendesc, typebadge, sign }) {
    return(
        <div className="card">
            <img src={picture} alt="pfp" />
            <h2>{title}</h2>
            <div className="badges">
                <img src={typebadge} alt="type" />
                <img src={sign} alt="sign" />
            </div>
            <p>{desc}</p>
            <p className="hidden">{hiddendesc}</p>
        </div>
    );
}
export default Card;