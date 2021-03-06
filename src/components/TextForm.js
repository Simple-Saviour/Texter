import React, {useState} from 'react'

export default function TextForm(props) {

    
    
    
    const handleOnchange = (event)=>{
        console.log("On change");
        setText (event.target.value);
    }
    const handleUpClick = ()=>{
        console.log("Converted to uppercase");
        let newText  = text.toUpperCase();
        setText(newText);
        props.showAlert (" Text changed to Uppercase." , "success");
    }
    const handleLowClick = ()=>{
        console.log("Converted to lowercase");
        let newText  = text.toLowerCase();
        setText(newText);
        props.showAlert (" Text changed to lowercase." , "success");
    }
    // const handleTitlecasefaw = ()=>{
    //     console.log("Converted to titlecasefaw");
    //    let i,cnt=0;
    //    let newText="";
    //    for(i=0;i<text.length;i++){
    //        if(text.charAt(i)==" "){
    //            newText = newText + " " + text.charAt(cnt).toUpperCase() + text.substr(cnt+1,i-1);
    //            cnt = i+1;
    //          }
    //      }
    //                 setText (newText);
    //            }
           const handleTitlecase = ()=>{
            let newText  =text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
            setText(newText);
            props.showAlert (" Titlecase is implemented." , "success");
       }

    const handleClearText = ()=>{
        let newText  = '';
        setText(newText);
        props.showAlert (" Text cleared successfully." , "success");
    }

    const handleCopyText = ()=>{
        let text  = document.getElementById("myBox");
        text.select();
       navigator.clipboard.writeText(text.value);
       props.showAlert (" Text copied successfully." , "success");
   }

    const [text, setText] = useState("Enter text");
    return (
       <>
       <div className="container" style = {{color : props.mode==='light'?'rgb(24 46 127)':'white'}}>
        <div className="mb-4">
             <label htmlFor="myBox" className="form-label"> <h2><u>{props.heading}</u></h2></label>
             <textarea className="form-control" value = {text} style = {{background : props.mode==='light'?'white':'#2949be'}} onChange = {handleOnchange} id="myBox" rows="8"></textarea>
        </div>

        <button  disabled= {text.length === 0} className ="btn btn-info mx-2 my-1" onClick={handleUpClick}>
           <h5> Convert to UPPER CASE</h5>
        </button>

        <button disabled= {text.length === 0} className ="btn btn-info mx-2 my-1" onClick={handleLowClick}>
           <h5> Convert to lower case</h5>
        </button>

        <button disabled= {text.length === 0} className ="btn btn-info mx-2 my-1" onClick={handleTitlecase}>
           <h5> Convert to Title case</h5>
        </button>

        {/* <button className ="btn btn-primary mx-2" onClick={handleTitlecasefaw}>
           <h5> Convert to Title case faw</h5>
        </button> */}

        <button disabled= {text.length === 0} className ="btn btn-info mx-2 my-1" onClick={handleClearText}>
           <h5> Clear Text</h5>
        </button>

        <button disabled= {text.length === 0} className ="btn btn-info mx-2 my-1" onClick={handleCopyText}>
           <h5>Copy Text</h5>
        </button>

        </div>
        <div className="container my-3" style = {{color : props.mode==='light'?'#202e60':'white'}}>
            <h3>Your Text Summary</h3>
            <h5>{text.split(" ").filter((element)=>{return element.length !== 0}).length} Words</h5>
            <h5>{text.length} Characters</h5>

        </div>

        </>
    )
}
