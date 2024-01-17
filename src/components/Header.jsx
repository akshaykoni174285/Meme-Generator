import React from "react";
import Logo from "/images/memelogo.png"
function Header() {
    return (
            <div className="header">
                <img src={Logo} alt="Logo" />
                <h2 className="header--title">Meme Generator</h2>
            
             </div>
    )
}

export default Header;