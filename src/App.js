import banner from './assets/banner.png';
import fifa from './assets/fifa.png';
import cod from './assets/cod.png';
import ow from './assets/ow.png';
import wow from './assets/wow.png';
import dc from './assets/dc.png';
import dcDark from './assets/dcb.png';
import bg from './assets/gradient.png';
import Aos from "aos";
import "aos/dist/aos.css";
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    Aos.init({});
  }, [])
  return (
    <div className="App">

      <div className='Row-Header'>
        <h2>gamingcourses.gg</h2>
        <img src={dc} alt=""></img>
        <h1>From Bro's to Pro's</h1>
      </div>


      <div className='Banner' data-aos="fade-in" >
      <img src={banner} alt=""></img>,
      </div>


      <div className="Landing-Bottom" style={{ backgroundImage:`url(${bg})` }}>
        <div className="Row"  data-aos="fade-up">
          <div className="index-6-1">
            <img src={fifa} alt=""></img>
          </div>
          <div className="index-6-1">
            <img src={cod} alt=""></img>
          </div>
          <div className="index-6-1">
            <img src={ow} alt=""></img>
          </div>
          <div className="index-6-1">
            <img src={wow} alt=""></img>
          </div>
        </div>
      </div>

      <div className='join-discord'>
        <img src={dcDark} alt="" data-aos="fade-up"></img>
        <h1 data-aos="fade-up">JOIN DISCORD</h1>
      </div>


    </div>
  );
}

export default App;
