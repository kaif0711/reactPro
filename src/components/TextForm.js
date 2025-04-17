import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Convert to Uppercase!","success")
  };

  const handleLoClick = () =>{
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("Convert to Lowercase!","success")
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClearClick = () => {
    setText("")
    props.showAlert("Clear Box!","success")
  }

  const handleRemoveSpace = () =>{
    let newText = text.split(/[  ]+/);
    setText(newText.join(' '))
    props.showAlert("Remove Text!","success")
  }

  const handleCopy = () =>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copy Text!","success")
  }
  const [text, setText] = useState("");
  return (
    <>
      <div className="container text-center" style={{background: props.mode==='dark'?'#042743':'white',color: props.mode==='dark'?'white':'#042743'}}>
        <h2 className="text-center">{props.heading}</h2>
        <div className="mb-3">
          <textarea
            value={text}
            className="form-control"
            id="myBox"
            rows="12"
            onChange={handleOnChange}
            style={{background: props.mode==='dark'?'#042743':'white',color: props.mode==='dark'?'white':'#042743'}}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-3" onClick={handleRemoveSpace}>Remove extra space</button>
        <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy text</button>
        <button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear</button>
      </div>
      <div className="container my-4  text-center" style={{background: props.mode==='dark'?'#042743':'white',color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Text summary</h2><hr />
        <p> {text.split(' ').filter(word=>word.trim()!=="").length} <b>Number of words</b> and {text.replace(/[^a-zA-Z]/g,"").length} <b>Number of alphabets</b></p><hr />
        <p><span>{(0.008 * text.split(' ').length)}</span><b> Minutes to read</b></p>
        <hr />        
        <p>{text.split('\n').filter(p => p.trim() !== "").length} <b>Number of paragraph</b></p><hr />
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter some text about to preview it here"}</p>
      </div>
    </>
  );
}
