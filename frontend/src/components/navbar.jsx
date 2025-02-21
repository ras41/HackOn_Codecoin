import { useNavigate } from "react-router-dom";
export default function(){
  const navigate = useNavigate();
return(
<div className="navbar flexbox">
<h1 onClick={()=>{navigate('/')}}>Code Quest</h1>
  <div className="flexbox">
<span >Challenges</span>
<span onClick={()=>{navigate('/lessons')}}>Lessons</span>
  </div>
  <div className="nav-pro flexbox">
<p>exp 10</p>
<p>level 1</p>
<span className="button">User</span>
  </div>
  
  </div>
);
}
