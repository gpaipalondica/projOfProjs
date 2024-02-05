import React, { useEffect } from 'react'
import Logo from '../assets/lambo/logo.png'
import Logo2 from '../assets/lambo/logo.png'
import '../styles/Lamborghini.css';
import Sound from '../assets/lambo/lambo-sound.mp3'
import Aventador from '../assets/lambo/aventador/pic.jpg'
import Av from '../assets/lambo/png/av.png'
import Av1 from '../assets/lambo/aventador/2.jpg'
import Av2 from '../assets/lambo/aventador/3.jpg'
import Av3 from '../assets/lambo/aventador/6.jpg'
import Av4 from '../assets/lambo/aventador/7.jpg'
import Av5 from '../assets/lambo/aventador/4.jpg'
import Av6 from '../assets/lambo/aventador/9.jpg'
import Av7 from '../assets/lambo/aventador/10.jpg'
import Ur from '../assets/lambo/png/urus.png'
import Ur1 from '../assets/lambo/urus/1.jpeg'
import Ur2 from '../assets/lambo/urus/2.jpeg'
import Ur3 from '../assets/lambo/urus/3.jpeg'
import Ur4 from '../assets/lambo/urus/4.jpeg'
import Ur5 from '../assets/lambo/urus/5.jpeg'
import Ur6 from '../assets/lambo/urus/6.jpeg'
import Ur7 from '../assets/lambo/urus/7.jpeg'
import Hur from '../assets/lambo/png/huracan.png'
import Hur1 from '../assets/lambo/huracan/1.jpeg'
import Hur2 from '../assets/lambo/huracan/2.jpeg'
import Hur3 from '../assets/lambo/huracan/3.jpeg'
import Hur4 from '../assets/lambo/huracan/4.jpeg'
import Hur5 from '../assets/lambo/huracan/5.jpeg'
import Hur6 from '../assets/lambo/huracan/6.jpeg'

function Lamborghini() {


  useEffect(() => {

    const fixedContainer = document.querySelector('.fixedCont');
    const bgc = document.querySelectorAll('.colorTry');

    const checkVisibility = () => {
      const containerRect = fixedContainer.getBoundingClientRect();
      const elements = document.querySelectorAll('.lambo-section img');

      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const elementRect = element.getBoundingClientRect();

        // Check if element is within the fixed container's viewport
        const isVisible =
          elementRect.top >= containerRect.top &&
          elementRect.bottom <= containerRect.bottom;

        // Do something with the visible element
        if (isVisible) {
          // console.log(element);
          const x = element.alt;
          // console.log(x);

          let l = document.querySelectorAll('.car');
          for (let i = 0; i < l.length; i++) {
            l[i].classList.remove('active');
          }

          if (x === 'img-avent') {
            document.querySelectorAll('.car')[1].classList.add('active');
            const track = document.querySelector('#aventador .dots.active');
            // console.log(track);
            if (track.id === 'orange') {
              document.getElementById('ct').style.backgroundColor =
                'rgb(239, 117, 31)';
              document.getElementById('ct2').style.backgroundColor =
                'rgb(239, 117, 31)';
            } else if (track.id === 'black') {
              document.getElementById('ct').style.backgroundColor =
                'rgba(0, 0, 0,0.8)';
              document.getElementById('ct2').style.backgroundColor =
                'rgba(0, 0, 0,0.8)';
            } else {
              document.getElementById('ct').style.backgroundColor =
                track.id;
              document.getElementById('ct2').style.backgroundColor =
                track.id;
            }
          } else if (x === 'img-urus') {
            document.querySelectorAll('.car')[2].classList.add('active');
            const track = document.querySelector('#urus .dots2.active');
            // console.log(track);
            if (track.id === 'orange') {
              document.getElementById('ct').style.backgroundColor =
                'rgb(239, 117, 31)';
              document.getElementById('ct2').style.backgroundColor =
                'rgb(239, 117, 31)';
            } else if (track.id === 'black') {
              document.getElementById('ct').style.backgroundColor =
                'rgba(0, 0, 0,0.8)';
              document.getElementById('ct2').style.backgroundColor =
                'rgba(0, 0, 0,0.8)';
            } else {
              document.getElementById('ct').style.backgroundColor =
                track.id;
              document.getElementById('ct2').style.backgroundColor =
                track.id;
            }
          } else if (x === 'img-hur') {
            document.querySelectorAll('.car')[3].classList.add('active');
            const track = document.querySelector('#huracan .dots3.active');
            // console.log(track);
            if (track.id === 'purple') {
              document.getElementById('ct').style.backgroundColor = '#8535BA';
              document.getElementById('ct2').style.backgroundColor =
                '#8535BA';
            } else if (track.id === 'black') {
              document.getElementById('ct').style.backgroundColor =
                'rgba(0, 0, 0,0.8)';
              document.getElementById('ct2').style.backgroundColor =
                'rgba(0, 0, 0,0.8)';
            } else {
              document.getElementById('ct').style.backgroundColor =
                track.id;
              document.getElementById('ct2').style.backgroundColor =
                track.id;
            }
          }
        }
      }
    };

    const test = document.getElementById('cont');
    if (test) {
      test.addEventListener('scroll', checkVisibility);
    }

    const text = 'Lamborghini'; // The text you want to display
    let charIndex = 0;
    const typingText = document.getElementById('heading');

    const type = () => {
      typingText.textContent = text.slice(0, charIndex);
      charIndex++;

      if (charIndex <= text.length) {
        setTimeout(type, 100); // Adjust the typing speed (in milliseconds)
      }
    };

    setTimeout(type, 200);

    const myDiv = document.getElementById('div');

    const adjustFontSize = () => {
      const divWidth = myDiv.offsetWidth;
      const fontSize = divWidth * 0.2; // Adjust the scaling factor as needed

      myDiv.children[0].style.fontSize = fontSize + 'px';
    };

    adjustFontSize();
    window.addEventListener('resize', adjustFontSize);

    setTimeout(() => {
      myDiv.style.top = '13%';
    }, 1200);

    setTimeout(() => {
      document.getElementById('btn').style.opacity = '1';
    }, 1800);

    setTimeout(() => {
      myDiv.style.top = '13%';
    }, 1200);

    setTimeout(() => {
      document.getElementById('btn').style.opacity = '1';
    }, 1800);

    return () => {
      window.removeEventListener('resize', adjustFontSize);
    };
  }, []);


  const choose = (id) => {
    const c = id;
    // console.log('chosen', c);

    const all = document.querySelectorAll('.dots');
    for (let a = 0; a < all.length; a++) {
      all[a].classList.remove('active');
    }

    const b = document.querySelectorAll('.dots');
    for (let i = 0; i < b.length; i++) {
      if (b[i].id === c) {
        // console.log('Found');
        b[i].classList.add('active');
      }
    }

    if (c === 'orange') {
      document.getElementById('aventador').children[1].src = Av1
      document.getElementById('ct').style.backgroundColor =
        'rgb(239, 117, 31)';
      document.getElementById('ct2').style.backgroundColor =
        'rgb(239, 117, 31)';
    } else if (c === 'blue') {
      document.getElementById('aventador').children[1].src =
      Av2
      document.getElementById('ct').style.backgroundColor = 'blue';
      document.getElementById('ct2').style.backgroundColor = 'blue';
    } else if (c === 'red') {
      document.getElementById('aventador').children[1].src =
      Av3
      document.getElementById('ct').style.backgroundColor = 'red';
      document.getElementById('ct2').style.backgroundColor = 'red';
    } else if (c === 'black') {
      document.getElementById('aventador').children[1].src =
      Av4
      document.getElementById('ct').style.backgroundColor =
        'rgba(0,0,0,0.8)';
      document.getElementById('ct2').style.backgroundColor =
        'rgba(0,0,0,0.8)';
    } else if (c === 'cyan') {
      document.getElementById('aventador').children[1].src =
        Av5
      document.getElementById('ct').style.backgroundColor = 'cyan';
      document.getElementById('ct2').style.backgroundColor = 'cyan';
    } else if (c === 'yellow') {
      document.getElementById('aventador').children[1].src =
       Av6
      document.getElementById('ct').style.backgroundColor = 'yellow';
      document.getElementById('ct2').style.backgroundColor = 'yellow';
    } else if (c === 'gray') {
      document.getElementById('aventador').children[1].src =
       Av7
      document.getElementById('ct').style.backgroundColor = 'gray';
      document.getElementById('ct2').style.backgroundColor = 'gray';
    }
  };

  const choose2 = (id2) => {
    const c2 = id2
    // console.log('chosen', c2);

    const all2 = document.querySelectorAll('.dots2');
    for (let a = 0; a < all2.length; a++) {
      all2[a].classList.remove('active');
    }

    const b = document.querySelectorAll('.dots2');
    for (let i = 0; i < b.length; i++) {
      if (b[i].id === c2) {
        // console.log('Found');
        b[i].classList.add('active');
      }
    }

    if (c2 === 'blue') {
      document.getElementById('urus').children[1].src =
       Ur1
      document.getElementById('ct').style.backgroundColor = c2;
      document.getElementById('ct2').style.backgroundColor = c2;
    } else if (c2 === 'yellow') {
      document.getElementById('urus').children[1].src =
      Ur2
      document.getElementById('ct').style.backgroundColor = c2;
      document.getElementById('ct2').style.backgroundColor = c2;
    } else if (c2 === 'orange') {
      document.getElementById('urus').children[1].src =
       Ur3
      document.getElementById('ct').style.backgroundColor = c2;
      document.getElementById('ct2').style.backgroundColor = c2;
    } else if (c2 === 'white') {
      document.getElementById('urus').children[1].src =
      Ur4
      document.getElementById('ct').style.backgroundColor = c2;
      document.getElementById('ct2').style.backgroundColor = c2;
    } else if (c2 === 'green') {
      document.getElementById('urus').children[1].src =
      Ur5
      document.getElementById('ct').style.backgroundColor = c2;
      document.getElementById('ct2').style.backgroundColor = c2;
    } else if (c2 === 'black') {
      document.getElementById('urus').children[1].src =
      Ur6
      document.getElementById('ct').style.backgroundColor =
        'rgba(0,0,0,0.8)';
      document.getElementById('ct2').style.backgroundColor =
        'rgba(0,0,0,0.8)';
    } else if (c2 === 'red') {
      document.getElementById('urus').children[1].src =
      Ur7
      document.getElementById('ct').style.backgroundColor = c2;
      document.getElementById('ct2').style.backgroundColor = c2;
    }
  };

  const choose3 = (id3) => {
    const c3 = id3;
    // console.log('chosen', c3);

    const all3 = document.querySelectorAll('.dots3');
    for (let a = 0; a < all3.length; a++) {
      all3[a].classList.remove('active');
    }

    const b = document.querySelectorAll('.dots3');
    for (let i = 0; i < b.length; i++) {
      if (b[i].id === c3) {
        // console.log('Found');
        b[i].classList.add('active');
      }
    }

    if (c3 === 'purple') {
      document.getElementById('huracan').children[1].src =
      Hur1
      document.getElementById('ct').style.backgroundColor = '#8535BA';
      document.getElementById('ct2').style.backgroundColor = '#8535BA';
    } else if (c3 === 'gray') {
      document.getElementById('huracan').children[1].src =
      Hur2
      document.getElementById('ct').style.backgroundColor = c3;
      document.getElementById('ct2').style.backgroundColor = c3;
    } else if (c3 === 'blue') {
      document.getElementById('huracan').children[1].src =
      Hur3
      document.getElementById('ct').style.backgroundColor = c3;
      document.getElementById('ct2').style.backgroundColor = c3;
    } else if (c3 === 'yellow') {
      document.getElementById('huracan').children[1].src =
      Hur4
      document.getElementById('ct').style.backgroundColor = c3;
      document.getElementById('ct2').style.backgroundColor = c3;
    } else if (c3 === 'black') {
      document.getElementById('huracan').children[1].src =
      Hur5
      document.getElementById('ct').style.backgroundColor =
        'rgba(0,0,0,0.8)';
      document.getElementById('ct2').style.backgroundColor =
        'rgba(0,0,0,0.8)';
    } else if (c3 === 'green') {
      document.getElementById('huracan').children[1].src =
      Hur6
      document.getElementById('ct').style.backgroundColor = c3;
      document.getElementById('ct2').style.backgroundColor = c3;
    }

  };
  
  function scrollHere(x){
    let xx = x.currentTarget.innerText
    // console.log(xx);
    let xxx = xx.toLowerCase()

    if(xx == "EXPLORE"){
      document.getElementById('aventador').scrollIntoView()
    }else if(xx == "Home Page"){
      document.getElementById('start').scrollIntoView()
    }
    else{
      document.getElementById(xxx).scrollIntoView()
    }

  }

  return (
    <React.Fragment>
      <audio autoPlay>
        <source src={Sound} type="audio/mpeg" />
      </audio>

      <div id="logo" className="logo">
        <img src={Logo} alt="" />
      </div>

      <div className="container" id="cont">
        <div className="lambo-section" id="start">
          <a onClick={scrollHere}>
            <button id="btn">EXPLORE</button>
          </a>
          <div id="div" className="div">
            <h1 id="heading"></h1>
          </div>
          <img id="img" src={Aventador} alt="" />
        </div>

        {/* cars */}
        <div className="lambo-section" id="aventador">
          <div
            className="title"
            style={{ backgroundImage: "url("+Av+")" }}
          ></div>
          <img src={Av1} alt="img-avent" />
          <div className="colors">
            <div className="dots active" id="orange" onClick={(event) => choose(event.target.id)}></div>
            <div className="dots" id="blue" onClick={(event) => choose(event.target.id)}></div>
            <div className="dots" id="red" onClick={(event) => choose(event.target.id)}></div>
            <div className="dots" id="black" onClick={(event) => choose(event.target.id)}></div>
            <div className="dots" id="cyan" onClick={(event) => choose(event.target.id)}></div>
            <div className="dots" id="yellow" onClick={(event) => choose(event.target.id)}></div>
            <div className="dots" id="gray" onClick={(event) => choose(event.target.id)}></div>
          </div>
        </div>
        <div className="lambo-section" id="urus">
          <div
            className="title2"
            style={{ backgroundImage: "url("+Ur+")" }}
          ></div>
          <img src={Ur1} alt="img-urus" />
          <div className="colors">
            <div className="dots2 active" id="blue" onClick={(event) => choose2(event.target.id)}></div>
            <div className="dots2" id="yellow" onClick={(event) => choose2(event.target.id)}></div>
            <div className="dots2" id="orange" onClick={(event) => choose2(event.target.id)}></div>
            <div className="dots2" id="white" onClick={(event) => choose2(event.target.id)}></div>
            <div className="dots2" id="green" onClick={(event) => choose2(event.target.id)}></div>
            <div className="dots2" id="black" onClick={(event) => choose2(event.target.id)}></div>
            <div className="dots2" id="red" onClick={(event) => choose2(event.target.id)}></div>
          </div>
        </div>
        <div className="lambo-section" id="huracan">
          <div
            className="title3"
            style={{ backgroundImage: "url("+Hur+")" }}
          ></div>
          <img src={Hur1} alt="img-hur" />
          <div className="colors">
            <div className="dots3 active" id="purple" onClick={(event) => choose3(event.target.id)}></div>
            <div className="dots3" id="gray" onClick={(event) => choose3(event.target.id)}></div>
            <div className="dots3" id="blue" onClick={(event) => choose3(event.target.id)}></div>
            <div className="dots3" id="yellow" onClick={(event) => choose3(event.target.id)}></div>
            <div className="dots3" id="black" onClick={(event) => choose3(event.target.id)}></div>
            <div className="dots3" id="green" onClick={(event) => choose3(event.target.id)}></div>
          </div>
        </div>
      </div>

      <div id="ct" className="colorTry"></div>
      <div id="ct2" className="colorTry"></div>

      <div className="fixedCont"></div>

      <div className="tags">
        <a onClick={scrollHere} className="car">Home Page</a>
        <a className="car active" onClick={scrollHere}>Aventador</a>
        <a className="car" onClick={scrollHere}>Urus</a>
        <a className="car" onClick={scrollHere}>Huracan</a>
      </div>
    </React.Fragment>
  )
}

export default Lamborghini