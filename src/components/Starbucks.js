import React, { useEffect } from 'react'
import '../styles/Starbucks.css'
import StarLogo from '../assets/starbucks/st-logo.png'
import Collage from '../assets/starbucks/main-img.png'
import Mini1 from '../assets/starbucks/1.png'
import Mini2 from '../assets/starbucks/2.png'
import Mini3 from '../assets/starbucks/3.png'
import Mini4 from '../assets/starbucks/4.png'
import Bg1 from '../assets/starbucks/bg1.jpeg'
import Bg2 from '../assets/starbucks/bg2.jpeg'
import Bg3 from '../assets/starbucks/bg3.jpeg'
import Bg4 from '../assets/starbucks/bg4.jpeg'

function Starbucks() {
  
  useEffect(() => {
      document.getElementById('st-nav').style.top += '-400px'
      document.querySelector('.collage').style.cssText += 'position:relative;left:600px;top:600px;z-index:1'

      document.querySelector('#b-media2').style.display='none'
      document.querySelector('#b-media3').style.display='none'
      document.querySelector('#b-media4').style.display='none'
         
        setTimeout(()=>{
          document.getElementById('st-nav').style.cssText += 'top:0'
          document.querySelector('.collage').style.cssText += 'left:0;top:0;'
          document.querySelector('.mini').style.cssText += 'left:100px'
          document.querySelector('.whole').style.cssText = 'background-image: url("'+Bg1+'")'
          
        }, 200)      
  
    },[])


  function drink(x){
    let b = x.currentTarget.id
    console.log(b);

    let drinkss = document.querySelector('.miniss.active')
    drinkss.classList.remove('active')

    document.querySelectorAll(".b-media").forEach((e)=> e.style.display = 'none')
    
    // let drinksMini = document.querySelector('.m-media.active')
    // drinksMini.classList.remove('active')

    let drinksMini = document.querySelectorAll('.m-media'),n;
    for(n=0; n<drinksMini.length;n++){
      drinksMini[n].style.display = 'block'
    }

    let drinksBig = document.querySelector('.b-media.active')
    drinksBig.classList.remove('active')

    document.getElementById(b).classList.add('active')

    if(b == 'mini1'){
      document.getElementById('collage').style.cssText = 'transition: 1s ease; transform:rotate(323deg)'
      document.querySelector('.main-img').style.cssText = ' transition: .5s ease;';
      document.querySelector('.whole').style.backgroundImage = 'url('+Bg1+')'

      document.querySelector('.st-title').innerHTML = 'Mocha Caramel Delight'
      document.querySelector('.st-descr').innerHTML = 'Indulge in our Mocha Caramel Frappuccino - Pure Bliss in Every Sip!'

      // document.getElementById('m-media1').classList.add('active')
      document.getElementById('m-media1').style.display = 'none'

      document.getElementById('b-media1').classList.add('active')
      document.getElementById('b-media1').style.display = 'block'
    }
    
    if(b == 'mini2'){
      document.getElementById('collage').style.cssText = 'transition: 1s ease; transform:rotate(232deg); left: -20px; top:-20px'
      document.querySelector('.main-img').style.cssText = ' transition: .5s ease;';
      document.querySelector('.whole').style.backgroundImage = 'url('+Bg2+')'

      document.querySelector('.st-title').innerHTML = 'Strawberry Cheesecake'
      document.querySelector('.st-descr').innerHTML = "Indulge in the delightful fusion of creamy cheesecake and luscious strawberries !!"

      // document.getElementById('m-media2').classList.add('active')
      document.getElementById('m-media2').style.display = 'none'

      document.getElementById('b-media2').classList.add('active')
      document.getElementById('b-media2').style.display = 'block'
    }

    if(b == 'mini3'){
      document.getElementById('collage').style.cssText = 'transition: 1s ease; transform:rotate(144deg); left:-40px; top:20px'
      document.querySelector('.main-img').style.cssText = ' transition: .5s ease;';
      document.querySelector('.whole').style.backgroundImage = 'url('+Bg3+')'

      document.querySelector('.st-title').innerHTML = 'Salted Caramel'
      document.querySelector('.st-descr').innerHTML = "Indulge in the irresistible delight of Salted Caramel! Rich, creamy, and perfectly balanced. Satisfy your cravings today!"

      // document.getElementById('m-media3').classList.add('active')
      document.getElementById('m-media3').style.display = 'none'
      document.getElementById('b-media3').classList.add('active')
      document.getElementById('b-media3').style.display = 'block'
    }

    if(b == 'mini4'){
      
      document.getElementById('collage').style.cssText = 'transition: 1s ease; transform:rotate(55deg); left:-20px; bottom:-20px'
      
      document.querySelector('.main-img').style.cssText = ' transition: .5s ease;';
      
      document.querySelector('.whole').style.backgroundImage = 'url('+Bg4+')'

      document.querySelector('.st-title').innerHTML = 'Oreo Crumble Blast'
      document.querySelector('.st-descr').innerHTML = "Indulge in blissful delight with Oreo Crumble Frappuccino. Creamy, crunchy, and utterly delicious. Sip, savor, repeat!"

      // document.getElementById('m-media4').classList.add('active')
      document.getElementById('m-media4').style.display = 'none'
      document.getElementById('b-media4').classList.add('active')
      document.getElementById('b-media4').style.display = 'block'
    }
  }


  function drink2(x){

    // document.getElementById('b-media1').style.display='none'

      let selectedMini = x.currentTarget.id
      // console.log(selectedMini);

      let miniAll = document.querySelectorAll('.m-media'),j;
      // console.log(miniAll);
      
      for(j=0;j<miniAll.length;j++){
        miniAll[j].style.cssText += 'display:flex; transition: .5s ease;'
      }
      
      document.getElementById(selectedMini).style.cssText = 'display:none; transition: .5s ease'
      
      let bigAll = document.querySelectorAll('.b-media'),k;
      for(k=0;k<bigAll.length;k++){
        bigAll[k].style.display='none'
      }

      let miniUpdate = document.querySelectorAll('.miniss'),h;
      for(h=0;h<miniUpdate.length;h++){
        miniUpdate[h].classList.remove('active')
      }

      if(selectedMini == 'm-media1'){
        document.getElementById('b-media1').style.cssText = 'display:block;transition: .5s ease'
        document.querySelector('.st-title').innerHTML = 'Mocha Caramel Delight'
        document.querySelector('.st-descr').innerHTML = 'Indulge in our Mocha Caramel Frappuccino - Pure Bliss in Every Sip!'

        document.querySelector('.whole').style.backgroundImage = 'url('+Bg1+')'
        document.getElementById('mini1').classList.add('active')
        document.getElementById('collage').style.cssText = 'transition: 1s ease; transform:rotate(144deg); left:-40px; top:20px'
      }
      else if(selectedMini == 'm-media2'){
        document.getElementById('b-media2').style.display = 'block'
        document.querySelector('.st-title').innerHTML = 'Strawberry Cheesecake'
        document.querySelector('.st-descr').innerHTML = "Indulge in the delightful fusion of creamy cheesecake and luscious strawberries !!"

        document.querySelector('.whole').style.backgroundImage = 'url('+Bg2+')'

        document.getElementById('mini2').classList.add('active')
        document.getElementById('collage').style.cssText = 'transition: 1s ease; transform:rotate(232deg); left: -20px; top:-20px'
      }
      else if(selectedMini == 'm-media3'){
        document.getElementById('b-media3').style.display = 'block'
        document.querySelector('.st-title').innerHTML = 'Salted Caramel'
      document.querySelector('.st-descr').innerHTML = "Indulge in the irresistible delight of Salted Caramel! Rich, creamy, and perfectly balanced. Satisfy your cravings today!"

      document.querySelector('.whole').style.backgroundImage = 'url('+Bg3+')'

      document.getElementById('mini3').classList.add('active')
      document.getElementById('collage').style.cssText = 'transition: 1s ease; transform:rotate(144deg); left:-40px; top:20px'
      }
      else if(selectedMini == 'm-media4'){
        document.getElementById('b-media4').style.display = 'block'
        document.querySelector('.st-title').innerHTML = 'Oreo Crumble Blast'
      document.querySelector('.st-descr').innerHTML = "Indulge in blissful delight with Oreo Crumble Frappuccino. Creamy, crunchy, and utterly delicious. Sip, savor, repeat!"

      document.querySelector('.whole').style.backgroundImage = 'url('+Bg4+')'

      document.getElementById('mini4').classList.add('active')
      document.getElementById('collage').style.cssText = 'transition: 1s ease; transform:rotate(55deg); left:-20px; bottom:-20px'
      }

}

  return (
    <section className='whole'>
      <nav id='st-nav' className='st-navbar'>
        <img src={StarLogo} className="st-logo" />
        <a className='st-link'>FLAVOURS</a>
        <a className='st-link'>FIND US</a>
        <a className='st-link'>ABOUT US</a>
        <a className='st-link'>FRANCHISE</a>
        <button className='st-btn'>ONLINE STORE</button>
      </nav>

      <div className="st-details">
        <h1 className='st-title'>Chocolate Caramel Delight</h1>
        <h4 className='st-descr'>Indulge in our Mocha Caramel Frappuccino - Pure Bliss in Every Sip!</h4>
      </div>

      <div className="main-img">
        <img src={Collage} alt="" id='collage' className="collage" />
      </div>

      <div className="mini">
          <img id='mini1' onClick={drink} className='miniss active' src={Mini1} alt="mini1" />   
          <img id='mini2' onClick={drink}  className='miniss ' src={Mini2} alt="mini2" />
          <img id='mini3' onClick={drink}  className='miniss' src={Mini3} alt="mini3" />
          <img id='mini4' onClick={drink}  className='miniss' src={Mini4} alt="mini4" />
      </div>


      <div className="mini-media">
          <img id='m-media1' onClick={drink2} className='m-media active' src={Mini1} alt="mini1" />   
          <img id='m-media2' onClick={drink2}  className='m-media ' src={Mini2} alt="mini2" />
          <img id='m-media3' onClick={drink2}  className='m-media ' src={Mini3} alt="mini3" />
          <img id='m-media4' onClick={drink2}  className='m-media ' src={Mini4} alt="mini4" />
      </div>

      <div className="big-media">
        <img className='b-media active' id='b-media1' src={Mini1} alt="" />
        <img className='b-media' id='b-media2' src={Mini2} alt="" />
        <img className='b-media' id='b-media3' src={Mini3} alt="" />
        <img className='b-media' id='b-media4' src={Mini4} alt="" />
      </div>


    </section>
  )
}

export default Starbucks