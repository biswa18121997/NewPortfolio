import Nav from "./Nav";
import Portfolio from "./landing.jsx";
import StarryBackground from "./backGround";
import Foot from "./Foot.jsx";
import Projects from "./Projects.jsx";


function App(){
  return (
    <div>
      <Nav/>
      <StarryBackground/>
      <Portfolio/>
      <br /><br />
      <Projects/>
      <Foot/>
    </div>
  )
}
export default App;
