import { useState } from 'react';

import banner from './assets/banner.png';
import fifa from './assets/fifa.png';
import cod from './assets/cod.png';
import ow from './assets/ow.png';
import wow from './assets/wow.png';
import dc from './assets/dc.png';
import dcDark from './assets/dcb.png';
import bg from './assets/gradient.png';
import persona from './assets/persona.png';
import banner2 from './assets/banner5.png';
import objRight from './assets/object-right.png';
import objLeft from './assets/object-left.png';
import fb from './assets/fb.png';
import yt from './assets/yt.png';
import tw from './assets/tw.png';
import ins from './assets/in.png';

import Carousel from "react-simply-carousel";
import Aos from "aos";
import "aos/dist/aos.css";
import './App.css';
import './roadmap.css';
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
        <div className='hover'>
          <a href='-'>
            <figure>
              <img src={dc} alt=""></img>
            </figure>
          </a>
        </div>
        <h1>From Bro's to Pro's</h1>
      </div>

      <div className='Banner' data-aos="fade-down">
        <img src={banner} alt=""></img>,
      </div>

      <div className="Landing-Bottom"  style={{ backgroundImage:`url(${bg})` }}>
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

      <div className='teachers'  style={{ backgroundImage:`url(${banner2})`}}>
        <h1  data-aos="fade-up">TEACHERS</h1>
        <h6  data-aos="fade-up">This could be you</h6>
      </div>  
      <div className='section-carousel' data-aos="fade-up">
        <a href='-'>
          <div className='t-button'  data-aos="fade-up">
            <p id='button'>START</p>  
          </div>
        </a>

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
          <div className='person' >
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

      <div className='mission'>
        <div className='mission-header' data-aos="fade-up">
          <h2>MISSION</h2>
        </div>
        <div className='mission-context' data-aos="fade-up">
          <img src={objLeft} alt=""></img>
          <div className='mission-box' data-aos="fade-up">
              <h6>
                Our mission is connect esports gaming PRO's with BRO's, 
                provide valuable video lessons material to our subscribers 
                while keeping our competitive esports gaming community happy and updated.
                </h6>
          </div>
          <img src={objRight} alt=""></img>
        </div> 
      </div>
      

      <section id="roadmap" data-aos="fade-up">
        <h3 class="roadmap-title" data-aos="fade-up">
            ROADMAP
        </h3>
        <main data-aos="fade-up">
          <p>Stage 1</p>
          <p>Stage 2</p>
          <p>Stage 3</p>
          <p>Stage 4</p>
          <p>Stage 5</p>
          
        </main>
      </section>
      
      <div className='footer'  data-aos="fade-up">
        <div className='footer-text'>
          <h6>Follow us on social media.</h6>
        </div>
        <div className='icons'>
          <div className='hover'>
            <a href='-'>
              <figure>
                <img src={tw} alt=""></img>
              </figure>
            </a>
          </div>
          <div className='hover'>
            <a href='-'>
              <figure>
                <img src={fb} alt=""></img>
              </figure>
            </a>
          </div>
          <div className='hover'>
            <a href='-'>
              <figure>
                <img src={ins} alt=""></img>
              </figure>
            </a>
          </div>
          <div className='hover'>
            <a href='-'>
              <figure>
                <img src={yt} alt=""></img>
              </figure>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
