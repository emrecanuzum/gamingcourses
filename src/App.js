import { useState } from 'react';

import banner from './assets/banner.png';
import fifa from './assets/fifa.png';
import cod from './assets/cod.png';
import ow from './assets/ow.png';
import wow from './assets/wow.png';
import dc from './assets/dc.png';
import dcDark from './assets/dcb.png';
import bg from './assets/gradient.png';
import persona from './assets/persona.jpg';
import banner2 from './assets/banner2.png';

import Carousel from "react-simply-carousel";
import Aos from "aos";
import "aos/dist/aos.css";
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    Aos.init({});
  }, [])

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <div className="App">

      <div className='Row-Header'>
        <h2>gamingcourses.gg</h2>
        <img src={dc} alt=""></img>
        <h1>From Bro's to Pro's</h1>
      </div>


      <div className='Banner'>
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
        <div className='hover'>
        <a href='-'>
          <figure>
            <img src={dcDark} alt="" data-aos="fade-up"></img>    
          </figure>       
        </a>
        <h1 data-aos="fade-up">JOIN DISCORD</h1>
        </div>
      </div>

      <div className='teachers'  data-aos="fade-up" style={{ backgroundImage:`url(${banner2})` }}>
        <h1>TEACHERS</h1>
        <h6>This could be you</h6>
        <a href='-'>
        <div className='t-button'>
          <p>START</p>
        </div>
        </a>
        
        <div className='section-carousel' data-aos="fade-up">
          <Carousel
          activeSlideIndex={activeSlideIndex}
          onRequestChange={setActiveSlideIndex}
          itemsToShow={1}
          itemsToScroll={1}
          forwardBtnProps={{
            //here you can also pass className, or any other button element attributes
            style: {
              alignSelf: 'center',
              background: 'black',
              border: 'none',
              borderRadius: '50%',
              color: 'orange',
              cursor: 'pointer',
              fontSize: '20px',
              height: 30,
              lineHeight: 1,
              textAlign: 'center',
              width: 30,
            },
            children: <span>{`>`}</span>
          }}
          backwardBtnProps={{
            //here you can also pass className, or any other button element attributes
            style: {
              alignSelf: 'center',
              background: 'black',
              border: 'none',
              borderRadius: '50%',
              color: 'orange',
              cursor: 'pointer',
              fontSize: '20px',
              height: 30,
              lineHeight: 1,
              textAlign: 'center',
              width: 30,
            },
            children: <span>{`<`}</span>,
          }}
          responsiveProps={[
            {
              itemsToShow: 3,
              itemsToScroll: 1,
              minWidth: 100,
            }
          ]}
          speed={400}
          easing="linear">

            <div className='person'>
                <img src={persona} alt=""></img>
            </div>
            <div className='person'>
                <img src={persona} alt=""></img>
            </div>
            <div className='person'>
                <img src={persona} alt=""></img>
            </div>
            <div className='person'>
                <img src={persona} alt=""></img>
            </div>

          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default App;
