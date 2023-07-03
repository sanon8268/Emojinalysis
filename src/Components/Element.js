import React from "react";
import "../App.css"


function Element(emoji) {
    return (
            <div className="fow2">
                <div className="top">
                    <h2 className="emoji">{emoji.emoji}</h2>
                    <h4 className="name">{emoji.emojiName}</h4>
                </div>
                <div className="bottom">
                    <p className="info">{emoji.emojiDes}</p>
                </div>
            </div>
    );
}

export default Element;