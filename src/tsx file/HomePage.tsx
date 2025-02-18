import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom"
const HomePage = () => {

  // const [isVisible, setIsVisible] = useState(false);
  // const location = useLocation();
  // useEffect(() => {
  //   setIsVisible(true);
  // }, [location]);
  // useEffect(() => {
  //   if (isVisible) {
  //     // รีเซ็ต fade animation ทุกครั้ง
  //     const timeout = setTimeout(() => {
  //       setIsVisible(false);
  //     }, 1000);

  //     return () => clearTimeout(timeout);
  //   }
  // }, [isVisible]);

  // const [isVisible, setIsVisible] = useState(false);
  // const location = useLocation();
  // useEffect(() => {
  //   setIsVisible(true);
  // }, [location]); 
  // useEffect(() => {
  //   setIsVisible(prev => !prev); //True to False False to True
  // }, [location]);
  return (
    <nav>
      <div className="Bg">
        {/* <div className= {`${isVisible ? 'FadeIn2 BgCover' : 'Fade0'}`}> */}
        {/* <div className= {`BgCover ${isVisible ? 'FadeIn2 ' : 'FadeIn2F'}`}>  */}
        <div className="BgCover FadeIn2" key={location.pathname}>       
          <Outlet />
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
            <div style={{ paddingRight: 15, paddingBottom: 50 }}>
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
export default HomePage