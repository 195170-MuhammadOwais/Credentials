import React from 'react'

function Alert(props) {

    const capitalised=(word)=>{
        if(word==="danger"){
            word= ""
        }
        else if(word==="warning"){
          word=""
        }
        else if(word==="success"){
          word=""
        }
        else if(word==="dark"){
          word=""
        }
        else if(word==="light"){
          word=""
        }
        else if(word==="info"){
          word=""
        }
        else if(word==="primary"){
          word=""
        }
        else if(word==="secondary"){
          word=""
        }

        let cap = word.charAt(0).toUpperCase();
        return cap + word.slice(1);
    }
    
      return (
        <div style={{height:"35px"}} className='mt-5'> 
        {props.alert && 
         <div className={`alert alert-${props.alert.type} `} role="alert">
            <div> <strong>{capitalised(props.alert.type)}</strong> {props.alert.msg}</div>
          </div>}
          </div>
        
      );
    }
    
    export default Alert;