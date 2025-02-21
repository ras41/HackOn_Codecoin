export default function(){
return(
<div className="navbar flexbox">
<h1 onClick={()=>{window.location.href='http://localhost:5173/'}}>Code Quest</h1>
  <div className="flexbox">
<span >Challenges</span>
<span onClick={()=>{window.location.href='http://localhost:5173/lessons'}}>Lessons</span>
  </div>
  <div className="nav-pro flexbox">
<p>exp 10</p>
<p>level 1</p>
<span className="button">User</span>
  </div>
  
  </div>
);
}
