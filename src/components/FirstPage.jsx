import React from "react";
import ReactDOM from "react";
import memeLogo from "/images/memelogo.png"

function FirstPage(){
    return (
        <div className="first-page">
            <div className="first--content">
                <h1>String Meme Generator</h1>
                <h4>Make your haha string meme with this tool. so, you dont 
                    need to use your brain to make string of memes.
                </h4>
            </div>
            <img src={mememeLogo} alt="logo" />
           
        </div>
    )
}

export default FirstPage;