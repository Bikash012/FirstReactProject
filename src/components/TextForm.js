 import React, { useState } from 'react';

 export default function TextForm(props) {
   const [text, setText] = useState('Enter Text Here');

   const handleUpClick = () => {
     let newText = text.toUpperCase();
     setText(newText);
   };

   const handleDownClick = () => {
     let newText = text.toLowerCase();
     setText(newText);
   };

   const handleOnChange = (event) => {
     setText(event.target.value);
   };

   return (
    <>
        <div className='container'>
       <h1>{props.heading}</h1>
       <div className="mb-">
         <textarea
           className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"
         ></textarea>
       </div>
        {/*"btn.btn.btnprimary" then Enter*/} 
       <button className="btn btn-primary" onClick={handleUpClick}>
         Convert to Uppercase
       </button>
       <button className="btn btn-primary" onClick={handleDownClick}>
         Convert to Lowercase
       </button>
     </div>
         <div className="container my-3">
         <h1>Your Text summery</h1>
         <p>{text.split(" ").length} words and {text.length} characters</p>
         <p>{0.008 * text.split(" ").length} Minutes read</p>
         </div> 
    </>
   );
 }


 
