import monkeyLogo from "./assets/Monkeytype.png";
function Topper(){
    return(
        <>
        <div className="header-container">
        <div className="logo-top">
            <img src={monkeyLogo} alt="logo"/>
            <h2 className="logo-text">Zentype</h2>
        </div>
        <div className="githublink" onClick={()=>window.open("https://github.com/lurantys")}>
            <img src="https://img.icons8.com/ios11/512/FFFFFF/github.png" alt="github" />
        </div>
        </div>
        
        </>
    );
}
export default Topper;