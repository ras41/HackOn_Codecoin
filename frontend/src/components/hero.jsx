import { useNavigate } from "react-router-dom";
export default function(){
  const navigate = useNavigate();
return(
<div className="hero flexbox">
<h1>Level Up Your Coding Skills<br/> Through Play</h1>
  <div><p>Transform your coding journey into an exciting adventure with our gamified app. Experience hands-on learning, instant feedback, and a scoring system that motivates you to excel.</p>
  <div className="flexbox">
<span className="button"onClick={()=>{navigate('/lessons')}} >Get Started</span>
<span >Learn More</span>
  </div>
  </div>

  </div>
);
}
