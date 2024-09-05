import React ,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
      
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase" ,"success");
    }
    const handlelowClick =() =>{
        let newText2 = text.toLowerCase();
        setText(newText2)
        props.showAlert("converted to lowercase" ,'success');
    }
    const clear =()=>{
      
        let newText3 = ("");
        setText(newText3)
        props.showAlert("Text Cleared" ,'success');

    }
    const handlecopy=()=>{
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied" ,'success');


    }
    const handleextraspaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed" ,'success');

    }
    
    const handleOnChange=(e)=>{
      
        setText(e.target.value)

    }
    const [text,setText] = useState("")

    return (
        <>
        <div className='container'  style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}  </h1>
            <div className="mb-3">
                <textarea className="form-control" placeholder='Enter Text Here' value={text} onChange={handleOnChange} id="myBox" rows="8" style={{color: props.mode==='dark'?'white':'black' ,backgroundColor:props.mode==='dark'?'grey':'white'}}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>convert to Uppercase</button>
            <button className="btn btn-primary my-2 mx-2" onClick={handlelowClick}>convert to Lowercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handlecopy}>copy text</button>
            <button className="btn btn-success my-2 mx-2" onClick={handleextraspaces}>remove extra spaces</button>
            <button className="btn btn-danger my-2 mx-2" onClick={clear}>Clear Text</button>

        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2> Your Text Summary</h2>
           <p>  { text.trim().length === 0 ? 0 : text.split(" ").filter((element) => element.length !== 0).length}
           words and {text.length} characters</p> 
           <p> {0.008 * text.split(" ").length } minutes needed to read</p>
           <h3>preview</h3>
           <p>{text.length>0?text:'Enter some text to preview'}</p>


        </div>
        </>
        
    )
}
