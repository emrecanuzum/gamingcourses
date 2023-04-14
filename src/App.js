import { useState } from 'react';
import React from 'react'

import dcw from './assets/discordW.png';
import fifa from './assets/fifa.png';
import cod from './assets/cod.png';
import ow from './assets/ow.png';
import wow from './assets/wow.png';
import lol from './assets/lol.jpeg';
import cs from './assets/cs.jpg';
import dota from './assets/dota.jpg';
import ufc from './assets/ufc.jpg';
import nba from './assets/nba.jpg';
import bg from './assets/newbg.png';

import dcIcon from './assets/icons/discord.png';
import payIcon from './assets/icons/pay.png';
import formIcon from './assets/icons/form.png';
import taskIcon from './assets/icons/tasks.png';

import persona from './assets/persona.png';
import personaB from './assets/personaB.png';
import personaP from './assets/personaP.png';
import personaR from './assets/personaR.png';
import personaO from './assets/personaO.png';


import objRight from './assets/object-right.png';
import objLeft from './assets/object-left.png';

import discordBackground from './assets/2.svg';
import headerBackground from './assets/1.svg';

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
      <div className='videoBg'
      style={{
        contain: 'content'
      }}>
        <div className='Row-Header'>
          <h2>From Bro’s to Pro’s </h2>
          <div className='Row-Buttons'>
            <a className='rowHeader' href="#teachersSection">GAMES</a>
            <a className='rowHeader' href="#teachersSection">TUTORS</a>
            <a className='rowHeader' href="#missionSection">MISSION</a>
            <a className='rowHeader' href="#roadmap">ROADMAP</a>
          </div>
          <div className='Row-Discord'>
            <div className='hover'>
              <a className="dcHeader" href='-'>
                <figure>
                  <img src={dcw} alt=""></img>    
                </figure>       
              </a>
            </div>
          </div>
        </div>


        <div className='Banner'  style={{ backgroundImage:`url(${headerBackground})` }}>

          <h1>Master your in-game skills </h1>
          <h2>Rule the online world</h2>
          <h4>Annoying friend keeps running over you in online matchup? 
            Level up your game. 
            Join our courses and get more competitive advantages straight from our PRO’s. 
          </h4>

          <a href='-'>
          <div className='Landingbutton'  data-aos="fade-up">
            <p id='button'>JOIN NOW</p>  
          </div>
        </a>

        </div>

        <div className="Landing-Bottom">
          
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
            color: 'white',
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
            color: 'white',
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
            minWidth: 400,
          }
        ]}
        speed={400}
        easing="linear">

          <div className='gameimg' >
            <img id="persona" src={ow} alt=""></img>
          </div>
          <div className='gameimg'>
            <img id="persona" src={fifa} alt=""></img>
          </div>
          <div className='gameimg'>
            <img id="persona" src={cod} alt=""></img>
          </div>
          <div className='gameimg'>
            <img id="persona" src={wow} alt=""></img>
          </div>
          <div className='gameimg' >
            <img id="persona" src={lol} alt=""></img>
          </div>
          <div className='gameimg' >
            <img id="persona" src={dota} alt=""></img>
          </div>
          <div className='gameimg' >
            <img id="persona" src={cs} alt=""></img>
          </div>
          <div className='gameimg' >
            <img id="persona" src={ufc} alt=""></img>
          </div>
          <div className='gameimg' >
            <img id="persona" src={nba} alt=""></img>
          </div>
          
        </Carousel>  
        
        </div>
      </div>

      

      <div className='join-community'>
        <img src={discordBackground} alt=''></img>
        <h3 class="roadmap-title" data-aos="fade-up">
            JOIN OUR COMMUNITY
        </h3>
        <h4>Become our discord community member to catch the 
          latest gaming news, rumors and chat with your tutors. 
          Every early discord group member will have a 50 % 
          discount on gaming courses and will have a possibility
           to participate in our tournaments + win prizes every 
           month.
          </h4>
        <a href='-'>
          <div className='Landingbutton'  data-aos="fade-up">
            <p id='button'>JOIN NOW</p>  
          </div>
        </a>
      </div>

      <div className='join-discord'>
        <div className='hover'>
          <h1 data-aos="fade-up">WIN IN 4 STEPS</h1>
          <h2 data-aos="fade-up">It's easier than you think. Follow 4 simple easy steps</h2>
          <div className='dcRow' data-aos="fade-up">
            <dc className='dcGrid'>
              <div className='dcImg'>
                <img src={dcIcon} alt=''></img>
              </div>
              <h4>JOIN</h4>
            </dc>
            <dc className='dcGrid'>
              <div className='dcImg'>
                <img src={formIcon} alt=''></img>
              </div>
              <h4>REGISTER</h4>
            </dc>
            <dc className='dcGrid'>
              <div className='dcImg'>
                <img src={taskIcon} alt=''></img>
              </div>
              <h4>COMPLETE</h4>
            </dc>
            <dc className='dcGrid'>
              <div className='dcImg'>
                <img src={payIcon} alt=''></img>
              </div>
              <h4>GO PRO</h4>
            </dc>
          </div>
        </div>
      </div>

      <section id="teachersSection"></section>
      <div className='teachers'>
          <h1 id="tHeader" data-aos="fade-up">TEACHERS</h1>
          <h6 id="tDesc" data-aos="fade-up">This could be you</h6>
          <h6 id="tLongDesc">T his could be you his could be you his 
          could be you his could be you his could be you</h6>
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
      
      <section id="missionSection"></section>
      <div className='mission'>
        <div className='mission-header' data-aos="fade-up">
          <h2>MISSION</h2>
        </div>
        <div className='mission-context' data-aos="fade-up">
          <img src={objLeft} alt=""></img>
          <div className='mission-box' data-aos="fade-up">
              <h6>
              Connect esports gaming PRO's with BRO's, provide valuable video lessons material to our subscribers while keeping our competitive esports gaming community happy and updated.
                </h6>
          </div>
          <img src={objRight} alt=""></img>
        </div> 
      </div>
      
      <section id="roadmap">
        <h3 class="roadmap-title">
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
				<h2>TBA</h2>
				<p></p>
				<span class="cd-date">TBA</span>
			</div>
		</div>

		
	</section> 
      <div className='footer'>
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
