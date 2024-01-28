/* eslint-disable no-unused-vars */
import React from "react";
import MemeData from "./memeData"


export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    })

    const [allMemeImages, setAllMemeImages] = React.useState(MemeData)
 
    
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMeme(prevState=>{
            return {
                ...prevState,
                randomImage: memesArray[randomNumber].url
            }
        })
        
    }
    
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    label="hello world"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme--image">
                <img src={meme.randomImage}/>
            </div>
            
        </main>
    )
}