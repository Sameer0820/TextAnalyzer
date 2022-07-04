import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter Text Here');
    const [myStyle, setmyStyle] = useState({
        fontFamily: "Segoe UI"
    })
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!","success");
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!","success");
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!","success");
    }
    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text Copied!","success");
    }
    const handleClearClick = () => {
        setText("")
        props.showAlert("Text Cleared!","success");
    }
    const changeFont = () => {
        if (myStyle.fontFamily === "Segoe UI") {
            setmyStyle({
                fontFamily: "cursive"
            })
        }
        else
        {
            setmyStyle({
                fontFamily:"Segoe UI"
            })
        }
        props.showAlert("Font Changed!","success");
    }
    const handleOnChange = (event) => {
        // console.log("On Changed");
        setText(event.target.value);
    }
    return (
        <>
            <div className='container' style ={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading} </h1>
                <div className="mb-3" style={myStyle}>
                    <textarea className="form-control" value={text} id="myBox" rows="8" style ={{backgroundColor: props.mode==='dark'?'rgb(29, 26, 26)':'white', color: props.mode ==='dark'?'white':'black'}} onChange={handleOnChange}></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={changeFont}>Change Font</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
                
            </div>
            <div className="container my-3" style ={{backgroundColor: props.mode==='light'?'white':'rgb(29, 26, 26)',  color: props.mode ==='dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} charaters</p>
                <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text: "Nothing to preview!"}</p>
            </div>
        </>
    )
}
