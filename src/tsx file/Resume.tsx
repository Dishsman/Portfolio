import { Link,} from "react-router-dom"

const Resume =()=>{
return(
        <nav>
          <div className="Bg" style={{display:'flex',justifyContent:'end'}}>
            <div className="BgCover FadeIn2" style={{position:'absolute',right:'30%',left:'30%',display:'flex', justifyContent:'center', alignItems:'center'}}>
            <img src= "ResumeDevNew.png"/>
            </div>
            <div id="option" style={{ display: 'flex', height: '100%', width: '60%', flexDirection: 'column' }}>
              <div id="button" style={{ display: 'flex', alignContent: 'start', justifyContent: 'flex-end', height: '50%', width: '100%', paddingTop: '10px' }}>
                <div className="button">
                  <Link to="/">Home</Link>
                </div>
                <div className="button">
                  <Link to="/About">About</Link>
                </div>
                <div className="button">
                  <Link to="/ToolsPage">Tools</Link>
                </div>
                <div className="button">
                  <Link to="/Resume">Resume</Link>
                </div>
              </div>
              <div className="button" style={{ display: 'flex', height: '50%', width: '100%', justifyContent: 'end', alignItems: 'end', flexDirection: 'column', }}>
                <div style={{paddingRight:15,paddingBottom:50}}>
                  <div className="contact">CONTACT ME</div>
                  <div className="contactInfo">tel: 082-163-0612</div>
                  <div className="contactInfo">Gmail: ampornratjirat@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      )
}
export default Resume