import { useState } from 'react';
import React from 'react'

import dcw from './assets/discordW.png';
import fifa from './assets/fifa.png';
import cod from './assets/cod.png';
import ow from './assets/ow.png';
import wow from './assets/wow.png';
import dcDark from './assets/dcb.png';
import bg from './assets/newbg.png';

import persona from './assets/persona.png';
import personaB from './assets/personaB.png';
import personaP from './assets/personaP.png';
import personaR from './assets/personaR.png';
import personaO from './assets/personaO.png';


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
import './assetRoadmap.css';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    Aos.init({});
  }, [])

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  function teacher1() {
    var expandImg = document.getElementById("expand");
    expandImg.src = personaB
    expandImg.parentElement.style.display = "block";

    var header = document.getElementById("tHeader");
    header.innerHTML="Simple";

    var desc = document.getElementById("tDesc");
    desc.innerHTML="Best CS:GO Player of all times!"
  }
  function teacher2() {
    var expandImg = document.getElementById("expand");
    expandImg.src = personaP
    expandImg.parentElement.style.display = "block";

    var header = document.getElementById("tHeader");
    header.innerHTML="aBeZy";

    var desc = document.getElementById("tDesc");
    desc.innerHTML="Best COD Player"
  }
  function teacher3() {
    var expandImg = document.getElementById("expand");
    expandImg.src = personaR
    expandImg.parentElement.style.display = "block";

    var header = document.getElementById("tHeader");
    header.innerHTML="JJonak";

    var desc = document.getElementById("tDesc");
    desc.innerHTML="Best Overwatch Player"
  }
  function teacher4() {
    var expandImg = document.getElementById("expand");
    expandImg.src = personaO
    expandImg.parentElement.style.display = "block";

    var header = document.getElementById("tHeader");
    header.innerHTML="LevideWeerd";

    var desc = document.getElementById("tDesc");
    desc.innerHTML="Best FIFA 23 Player"
  }

  return (
    <div className="App"   style={{ backgroundImage:`url(${bg})` }}>
      <div className='Row-Header'>
        <h2>gamingcourses.gg</h2>
        <div className='Row-Buttons'>
          <a href="-">MISSION</a>
          <a href="-">TEACHERS</a>
          <a href="-">ROADMAP</a>
        </div>
        <div className='Row-Discord'>
          <div className='hover'>
            <a href='-'>
              <figure>
                <img src={dcw} alt=""></img>    
              </figure>       
            </a>
          </div>
        </div>
      </div>

      <hr></hr>

      <div className='Banner'>
        <h1>LOREMIPSUM</h1>
        <h2>From Bro's to Pro's</h2>
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </h4>
      </div>

      <div className="Landing-Bottom">
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

      <div className='teachers'>
          <h1 id="tHeader" data-aos="fade-up">TEACHERS</h1>
          <h6 id="tDesc" data-aos="fade-up">This could be you</h6>
      </div>  
      <div className='teacher-face'>
        <img src={persona} alt="" id="expand"></img>
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
            <img id="persona" src={personaB} alt="" onClick={teacher1}></img>
          </div>
          <div className='person'>
            <img id="persona" src={personaP} alt="" onClick={teacher2}></img>
          </div>
          <div className='person'>
            <img id="persona" src={personaR} alt="" onClick={teacher3}></img>
          </div>
          <div className='person'>
            <img id="persona" src={personaO} alt="" onClick={teacher4}></img>
          </div>

        </Carousel>  
      </div>
      
      

      <section id="roadmap" data-aos="fade-up">
        <h3 class="roadmap-title" data-aos="fade-up">
            ROADMAP
        </h3>
      </section>
      
      <section id="cd-timeline" class="cd-container">
		  <div class="cd-timeline-block">
			<div class="cd-timeline-img cd-picture">
			</div>

			<div class="cd-timeline-content">
        <h2>Title of section 2</h2>
			  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?</p> 
        <span class="cd-date">Jan 13</span>
      </div>
		  </div>

		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-movie">
			</div>

			<div class="cd-timeline-content">
				<h2>Title of section 2</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?</p>
				<span class="cd-date">Jan 18</span>
			</div>
		</div>

		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-picture">
			</div> 

			<div class="cd-timeline-content">
				<h2>Title of section 3</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, obcaecati, quisquam id molestias eaque asperiores voluptatibus cupiditate error assumenda delectus odit similique earum voluptatem doloremque dolorem ipsam quae rerum quis. Odit, itaque, deserunt corporis vero ipsum nisi eius odio natus ullam provident pariatur temporibus quia eos repellat consequuntur perferendis enim amet quae quasi repudiandae sed quod veniam dolore possimus rem voluptatum eveniet eligendi quis fugiat aliquam sunt similique aut adipisci.</p>
				<span class="cd-date">Jan 24</span>
			</div> 
		</div>

		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-location">
			</div>

			<div class="cd-timeline-content">
				<h2>Title of section 4</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
				<span class="cd-date">Feb 14</span>
			</div>
		</div>

		
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
