import Editor from "./editor.jsx"
import Content from "./content.jsx"
import Bot from "./bot.jsx"
import html from '../lessons/html.js'
export default function(props){
    console.log(props)
return(
<div className="question-div flexbox">
    <div>
        <Content {...props}/>
        <div className="flexbox">
            <span className="button" onClick={()=>{
const currentPath = window.location.pathname; 
const pathParts = currentPath.split("/"); 
const lastPart = parseInt(pathParts[pathParts.length - 1], 10); 
if (!isNaN(lastPart)&&lastPart-1>=0) {
  pathParts[pathParts.length - 1] = lastPart - 1; // Increment last part
  window.location.href = pathParts.join("/"); // Navigate to new URL
}
}}>Prev</span>
       <Bot/> 
       <span className="button" onClick={()=>{const currentPath = window.location.pathname; // e.g., "/lessons/html/1"
const pathParts = currentPath.split("/"); 
const lastPart = parseInt(pathParts[pathParts.length - 1], 10); 

if (!isNaN(lastPart)&&lastPart+1<html.length) {
  pathParts[pathParts.length - 1] = lastPart + 1; // Increment last part
  window.location.href = pathParts.join("/"); // Navigate to new URL
}
}}>Next</span>
</div>
        </div>
<Editor/>
</div>
);
}