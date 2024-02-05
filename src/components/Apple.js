import React from 'react'
import '../styles/Apple.css'
import img1 from '../assets/appleweb/1.png'
import img2 from '../assets/appleweb/2.png'
import img3 from '../assets/appleweb/3.png'
import img4 from '../assets/appleweb/4.png'
import img5 from '../assets/appleweb/5.png'
import img6 from '../assets/appleweb/6.png'
import img7 from '../assets/appleweb/7.png'
import img8 from '../assets/appleweb/8.png'
import img9 from '../assets/appleweb/9.png'
import slide1 from '../assets/appleweb/slide/1.png'
import slide2 from '../assets/appleweb/slide/2.png'
import slide3 from '../assets/appleweb/slide/3.png'
import slide4 from '../assets/appleweb/slide/4.png'
import slide5 from '../assets/appleweb/slide/5.png'
import Flickity from 'react-flickity-component'
import '../styles/Flickity.css'

function Apple() {

    const flickityOptions = {
        initialIndex: 2,
        autoPlay: true,
        wrapAround:true,
        // asNavFor: ".carousel.carousel-main",
        contain: true,
        pageDots: true
    }
    

    const enter = (event) => {
            let v = event.target.innerText
            // console.log(v);
            let v2
            if(typeof(v) == 'string'){
                v2 = v.toLowerCase()
            }
            else{
                leave()
            }
    
            // console.log(v2);
    
            const boxes = document.querySelectorAll('.ex-container');
            boxes.forEach(box => {
                box.style.display = 'none';
                document.getElementById('ex-nav').style.top = '-400px' 
            });
            
            
            if(v2 == 'mac' || v2 == 'store' || v2 == 'ipad' || v2 == 'iphone' || v2 == 'watch' || v2 == 'airpods' || v2 == 'tv & home' || v2 == 'entertainment' || v2 == 'accessories' || v2 == 'support'){
                document.getElementById('ex-nav').style.top = '0px'
                document.getElementById(v2).style.cssText = 'display:flex;'
                
                setTimeout(function(){
                    document.querySelector('.blurry').style.display = 'block'
                },250)
                // console.log("YES");
            }
            else{
                // console.log("NO");
                document.getElementById('ex-nav').style.top = '-500px' 
                document.querySelector('.blurry').style.display = 'none'
            }
    
    }

    // let p = document.getElementsByClassName('navbar')[0].children
// console.log(p);


    // console.log("YES");


setInterval(function(){
    const mediaQ = window.matchMedia('(max-width: 1150px)');
    
    if (mediaQ.matches && /appleweb/.test(document.URL)){
        // console.log("matched");
        document.getElementById('ex-nav').style.top = '-500px' 
        document.querySelector('.blurry').style.display = 'none'
    }
}, 2000)



const handle = (event) => {
    // console.log('handle');
    const ht = document.getElementById('ex-nav').clientHeight
    // console.log("ht", ht);
    
    let mouseY = event.clientY;
    // console.log(mouseY);
        
    if (mouseY > ht) {
        leave();
    }

}

const leave = () => {
    // console.log("Left");
    setTimeout(function(){
        document.getElementById('ex-nav').style.top = '-600px'
        document.querySelector('.blurry').style.display = 'none'
    }, 200)
}


const toggler = () => {
    // console.log('clicked');
    let cl = document.querySelector('.toggler').getElementsByTagName('svg')[0].getAttribute('id')
    // console.log(cl);
    
    if(cl == 'option'){
        document.querySelector('.toggler').innerHTML = '<svg style={{transition: "0.5s ease"}} id="cancel" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>'
        document.querySelector('.nav-toggle').style.top = '40px'
    }else if(cl == 'cancel'){
        document.querySelector('.toggler').innerHTML = '<svg style=style={{transition: "0.5s ease"}} id="option" stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path></svg>'
        document.querySelector('.nav-toggle').style.top = '-1000px'
    }

}

const showElement = event => {
    // console.log("Clicked", event.currentTarget.id);
    let id = event.currentTarget.id

    let links = document.getElementById(id).parentNode.children;

    let btn = document.getElementById(id).children[1].getElementsByTagName('svg')[0].id

    // console.log("btn id:",btn);

    if(btn == 'plus'){
        document.getElementById(id).children[1].innerHTML = '<svg style={{transition: "0.5s ease"}} id="cancel2" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>'

        for(let i=1; i<=links.length-1; i++){
         // console.log(links[i]);
         links[i].style.cssText = 'display:flex; top:0px; line-height:2; transition: .2s ease';
        }
    }
    else if(btn == 'cancel2'){
        document.getElementById(id).children[1].innerHTML = '<svg id="plus" stroke="currentColor" fill="currentColor" strokeWidth="0" t="1551322312294" viewBox="0 0 1024 1024" version="1.1" pid="10297" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z" pid="10298"></path><path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z" pid="10299"></path></svg>'

        for(let i=1; i<=links.length-1; i++){
            links[i].style.cssText = 'top:-20px;'
        }
    }

}


  return (
    <>
     <header>
        <nav className="navbar">
            <a onMouseOver={(event) => enter(event)}  ><svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M23.023 17.093c-0.033-3.259 2.657-4.822 2.777-4.901-1.512-2.211-3.867-2.514-4.705-2.548-2.002-0.204-3.91 1.18-4.926 1.18-1.014 0-2.583-1.15-4.244-1.121-2.185 0.033-4.199 1.271-5.323 3.227-2.269 3.936-0.58 9.769 1.631 12.963 1.081 1.561 2.37 3.318 4.061 3.254 1.63-0.064 2.245-1.055 4.215-1.055s2.524 1.055 4.248 1.021c1.753-0.032 2.864-1.591 3.936-3.159 1.24-1.814 1.751-3.57 1.782-3.659-0.038-0.017-3.416-1.312-3.451-5.202zM19.783 7.53c0.897-1.089 1.504-2.602 1.34-4.108-1.294 0.053-2.861 0.86-3.79 1.948-0.832 0.965-1.561 2.502-1.365 3.981 1.444 0.112 2.916-0.734 3.816-1.821z"></path></svg></a>
            <a onMouseOver={(event) => enter(event)} >Store</a>
            <a onMouseOver={(event) => enter(event)}  >Mac</a>
            <a onMouseOver={(event) => enter(event)}  >iPad</a>
            <a onMouseOver={(event) => enter(event)}  >iPhone</a>
            <a onMouseOver={(event) => enter(event)}  >Watch</a>
            <a onMouseOver={(event) => enter(event)}  >AirPods</a>
            <a onMouseOver={(event) => enter(event)}  >TV & Home</a>
            <a onMouseOver={(event) => enter(event)}  >Entertainment</a>
            <a onMouseOver={(event) => enter(event)}  >Accessories</a>
            <a onMouseOver={(event) => enter(event)}  >Support</a>
            <div className="group">
                <a onMouseOver={(event) => enter(event)}  ><svg style={{marginTop:'3px'}} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg></a>
                
                <a ><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M14 5H2v9a1 1 0 001 1h10a1 1 0 001-1V5zM1 4v10a2 2 0 002 2h10a2 2 0 002-2V4H1z" clipRule="evenodd"></path><path d="M8 1.5A2.5 2.5 0 005.5 4h-1a3.5 3.5 0 117 0h-1A2.5 2.5 0 008 1.5z"></path></svg></a>

                <a className="toggler" onClick={toggler} ><svg style={{transition:'0.5s ease'}} id='option' stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path></svg></a>

            </div>
        </nav>

        <div className="nav-toggle">
            <a >Store</a>
            <a >Mac</a>
            <a >iPad</a>
            <a >iPhone</a>
            <a >Watch</a>
            <a >AirPods</a>
            <a >TV & Home</a>
            <a >Entertainment</a>
            <a >Accessories</a>
            <a >Support</a>
        </div>

    </header>

    <div className="message">
        <p> Get $200-$600 in credit toward iPhone 14 or iPhone 14 Pro when you trade in iPhone 11 or higher. <a >Shop iPhone</a></p>
    </div>

    <div className="blurry"></div>
    
     {/* extended navbar   */}
    <div id="ex-nav" className="ex-nav" onMouseOut={(event)=>handle(event)}>
        {/* <!-- store  --> */}
        <div className="ex-container" id="store" style={{display: 'none'}}>
            <div>
                <p className="link-text">Shop</p>
                <a className="links" >Shop the Latest</a>
                <a className="links" >Mac</a>
                <a className="links" >iPad</a>
                <a className="links" >iPhone</a>
                <a className="links" >Apple Watch</a>
                <a className="links" >Accessories</a>
            </div>
            <div>
                <p className="link-text">Quick Links</p>
                <a className="links2" >Find a Store</a>
                <a className="links2" >Order Status</a>
                <a className="links2" >Apple Trade In</a>
                <a className="links2" >Financing</a>
                <a className="links2" >College Student Offer</a>
            </div>
            <div>
                <p className="link-text">Shop Special Stores</p>
                <a className="links2" >Certified Refurbished</a>
                <a className="links2" >Education</a>
                <a className="links2" >Business</a>
                <a className="links2" >Veterans and Military</a>
                <a className="links2" >Government</a>
            </div>
        </div>
        
        {/* <!-- mac  --> */}
        <div className="ex-container" id="mac" style={{display:'none'}}>
            <div>
                <p className="link-text">Explore Mac</p>
                <a className="links" >Explore All Mac</a>
                <a className="links" >Macbook Air</a>
                <a className="links" >Macbook Pro</a>
                <a className="links" >iMac</a>
                <a className="links" >Mac mini</a>
                <a className="links" >Mac Studio</a>
                <a className="links" >Mac Pro</a>
                <a className="links" >Displays</a>
                <a style={{fontSize: '12px'}} className="links" >Compare Mac</a>
                <a style={{fontSize: '12px'}} className="links" >Mac Does That</a>
            </div>
            <div>
                <p className="link-text">Shop Mac</p>
                <a className="links2" >Shop Mac</a>
                <a className="links2" >Mac Accessories</a>
                <a className="links2" >Apple Trade In</a>
                <a className="links2" >Financing</a>
                <a className="links2" >College Student Offer</a>
            </div>
            <div>
                <p className="link-text">More from Mac</p>
                <a className="links2" >Mac Support</a>
                <a className="links2" >macOS Sonoma Preview</a>
                <a className="links2" >Final Cut Pro</a>
                <a className="links2" >Logic Pro</a>
                <a className="links2" >Continuinty</a>
                <a className="links2" >iCloud</a>
                <a className="links2" >Mac for Business</a>
                <a className="links2" >Education</a>
            </div>
        </div>

        {/* <!-- ipad  --> */}
        <div className="ex-container" id="ipad" style={{display:'none'}}>
            <div>
                <p className="link-text">Explore iPad</p>
                <a className="links" >Explore All iPad</a>
                <a className="links" >iPad Air</a>
                <a className="links" >iPad Pro</a>
                <a className="links" >iPad</a>
                <a className="links" >iPad mini</a>
                <a className="links" >Apple Pencil</a>
                <a className="links" >Keyboards</a>
                <a style={{fontSize:'12px'}} className="links" >Compare iPad</a>
                <a style={{fontSize:'12px'}}className="links" >Why iPad</a>
            </div>
            <div>
                <p className="link-text">Shop iPad</p>
                <a className="links2" >Shop iPad</a>
                <a className="links2" >iPad Accessories</a>
                <a className="links2" >Apple Trade In</a>
                <a className="links2" >Financing</a>
                <a className="links2" >College Student Offer</a>
            </div>
            <div>
                <p className="link-text">More from iPad</p>
                <a className="links2" >iPad Support</a>
                <a className="links2" >iPadOS 17 Preview</a>
                <a className="links2" >Final Cut Pro for iPad</a>
                <a className="links2" >Logic Pro for iPad</a>
                <a className="links2" >iCloud</a>
                <a className="links2" >Education</a>
            </div>
        </div>

        {/* <!-- iphone --> */}
        <div className="ex-container" id="iphone" style={{display:'none'}}>
            <div>
                <p className="link-text">Explore iPhone</p>
                <a className="links" >Explore All iPhone</a>
                <a className="links" >iPhone 14 Pro</a>
                <a className="links" >iPhone 14</a>
                <a className="links" >iPhone 13</a>
                <a className="links" >iPhone 12</a>
                <a className="links" >iPhone SE</a>
                <a style={{fontSize: '12px'}} className="links" >Compare iPhone</a>
                <a style={{fontSize: '12px'}} className="links" >Switch from Android</a>
            </div>
            <div>
                <p className="link-text">Shop iPhone</p>
                <a className="links2" >Shop iPhone</a>
                <a className="links2" >iPhone Accessories</a>
                <a className="links2" >Apple Trade In</a>
                <a className="links2" >Carrier Deals at Apple</a>
                <a className="links2" >Financing</a>
            </div>
            <div>
                <p className="link-text">More from iPhone</p>
                <a className="links2" >iPhone Support</a>
                <a className="links2" >iOS 17 Preview</a>
                <a className="links2" >iPhone Privacy</a>
                <a className="links2" >iCloud</a>
                <a className="links2" >Wallet, Pay, Card</a>
                <a className="links2" >Siri</a>
            </div>
        </div>

        {/* <!-- watch --> */}
        <div className="ex-container" id="watch" style={{display:'none'}}>
            <div>
                <p className="link-text">Explore Watch</p>
                <a className="links" >Explore All Apple Watch</a>
                <a className="links" >Apple Watch Ultra</a>
                <a className="links" >Apple Watch Series 8</a>
                <a className="links" >Apple Watch SE</a>
                <a className="links" >Apple Watch Nike</a>
                <a className="links" >Apple Watch Hermès</a>
                <a style={{fontSize: '12px'}} className="links" >Compare Watch</a>
                <a style={{fontSize: '12px'}} className="links" >Why Apple Watch</a>
            </div>
            <div>
                <p className="link-text">Shop Watch</p>
                <a className="links2" >Shop Apple Watch</a>
                <a className="links2" >Apple Watch Studio</a>
                <a className="links2" >Apple Watch Bands</a>
                <a className="links2" >Apple Watch Accessories</a>
                <a className="links2" >Apple Trade In</a>
                <a className="links2" >Financing</a>
            </div>
            <div>
                <p className="link-text">More from Watch</p>
                <a className="links2" >Apple Watch Support</a>
                <a className="links2" >watchOS 10 Preview</a>
                <a className="links2" >Apple Fitness+</a>
                
            </div>
        </div>

        {/* <!-- airpods --> */}
        <div className="ex-container" id="airpods" style={{display:'none'}}>
            <div>
                <p className="link-text">Explore AirPods</p>
                <a className="links" >Explore All AirPods</a>
                <a className="links" >AirPods 2nd generation</a>
                <a className="links" >AirPods 3rd generation</a>
                <a className="links" >AirPods Pro 2nd generation</a>
                <a className="links" >AirPods Max</a>
                <a style={{fontSize: '12px'}}className="links" >Compare AirPods</a>
            </div>
            <div>
                <p className="link-text">Shop AirPods</p>
                <a className="links2" >Shop AirPods</a>
                <a className="links2" >AirPods Accessories</a>
            </div>
            <div>
                <p className="link-text">More from AirPods</p>
                <a className="links2" >AirPods Support</a>
                <a className="links2" >Apple Music</a>
            </div>
        </div>

        {/* <!-- tv --> */}
        <div className="ex-container" id="tv & home" style={{display:'none'}}>
            <div>
                <p className="link-text">Explore TV & Home</p>
                <a className="links" >Explore TV & Home</a>
                <a className="links" >Apple TV 4K</a>
                <a className="links" >HomePod</a>
                <a className="links" >HomePod mini</a>
            </div>
            <div>
                <p className="link-text">Shop TV & Home</p>
                <a className="links2" >Shop Apple TV 4K</a>
                <a className="links2" >Shop HomePod</a>
                <a className="links2" >Shop HomePod mini</a>
                <a className="links2" >Shop Siri Remote</a>
                <a className="links2" >TV & Home Accessories</a>
            </div>
            <div>
                <p className="link-text">More from TV & Home</p>
                <a className="links2" >Apple TV Support</a>
                <a className="links2" >HomePod Support</a>
                <a className="links2" >Apple TV app</a>
                <a className="links2" >Apple TV+</a>
                <a className="links2" >Home App</a>
                <a className="links2" >Apple Music</a>
                <a className="links2" >Siri</a>
                <a className="links2" >AirPlay</a>
            </div>
        </div>

        {/* <!-- entertainment --> */}
        <div className="ex-container" id="entertainment" style={{display:'none'}}>
            <div>
                <p className="link-text">Explore Entertainment</p>
                <a className="links" >Explore Entertainment</a>
                <a className="links" >Apple One</a>
                <a className="links" >Apple TV+</a>
                <a className="links" >Apple Music</a>
                <a className="links" >Apple Arcade</a>
                <a className="links" >Apple Fitness+</a>
                <a className="links" >Apple News+</a>
                <a className="links" >Apple Podcasts</a>
                <a className="links" >Apple Books</a>
                <a className="links" >Apple Store</a>
            </div>
            <div>
                <p className="link-text">Support</p>
                <a className="links2" >Apple TV+ Support</a>
                <a className="links2" >Apple Music Support</a>
            </div>
        </div>

        {/* <!-- accessories --> */}
        <div className="ex-container" id="accessories" style={{display:'none'}}>
            <div>
                <p className="link-text">Shop Accessories</p>
                <a className="links" >Shop All Accessories</a>
                <a className="links" >Mac</a>
                <a className="links" >iPad</a>
                <a className="links" >iPhone</a>
                <a className="links" >Apple Watch</a>
                <a className="links" >AirPods</a>
                <a className="links" >TV & Home</a>
            </div>
            <div>
                <p className="link-text">Explore Accessories</p>
                <a className="links2" >Made by Apple</a>
                <a className="links2" >Beats by Dr. Dre</a>
                <a className="links2" >AirTag</a>
            </div>
        </div>

        {/* <!-- support --> */}
        <div className="ex-container" id="support" style={{display:'none'}}>
            <div>
                <p className="link-text">Explore Support</p>
                <a className="links" >iPhone</a>
                <a className="links" >Mac</a>
                <a className="links" >iPad</a>
                <a className="links" >iPhone</a>
                <a className="links" >Watch</a>
                <a className="links" >AirPods</a>
                <a className="links" >Music</a>
                <a className="links" >TV</a>
                <a style={{fontSize:'12px'}} className="links" >Explore Support</a>
            </div>
            <div>
                <p className="link-text">Get Help</p>
                <a className="links2" >Community</a>
                <a className="links2" >Check Coverage</a>
                <a className="links2" >Repair</a>
                <a className="links2" >Contact Us</a>
            </div>
            <div>
                <p className="link-text">Helpful Topics</p>
                <a className="links2" >Get AppleCare+</a>
                <a className="links2" >Apple ID & Password</a>
                <a className="links2" >Billing & Subscription</a>
                <a className="links2" >Find My</a>
                <a className="links2" >Accessibility</a>
            </div>
        </div>

    </div>

    {/* <!-- iphone 14 pro  --> */}
    <section className="section">
        <div className="secOne">
            <div className="secOne-container">
                <h1>iPhone 14 Pro</h1>
                <h3>Pro. Beyond.</h3>
                <div className="secOne-links">
                    <a >Learn more</a>
                    <a >Buy</a>
                </div>
                <img className="img" src={img1} alt="img1" />
            </div>
        </div>  
    </section>
    
    {/* <!-- iphone 14  --> */}
    <section className="section">
        <div className="secTwo">
            <div className="secTwo-container">
                <h1>iPhone 14</h1>
                <h3>Big and Bigger.</h3>
                <div className="secTwo-links">
                    <a >Learn more</a>
                    <a >Buy</a>
                </div>
                <img className="img" src={img2} alt="img2" />
            </div>
        </div>
    </section>

    {/* <!-- watch 8  --> */}
    <section className="section">
        <div className="secThree">
            <div className="secThree-container">
                <div className="secThree-div">
                    <svg stroke="white" fill="white" strokeWidth="0" viewBox="0 0 1024 1024" height="3em" width="3em" style={{marginBottom:'5px'}} xmlns="http://www.w3.org/2000/svg"><path style={{marginTop:'5px'}}  d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z"></path></svg>
                    <h1>WATCH</h1>
                </div>
                <p>SERIES 8</p>
                <h3>A healthy leap ahead.</h3>
                <div className="secTwo-links">
                    <a >Learn more</a>
                    <a >Buy</a>
                </div>
                <img className="img" src={img3} alt="img3" />
            </div>
        </div>
    </section>

    <section className="section2">
    <div className="grid">
            {/* <!-- 1  --> */}
            <div className="grid-container left">
                <h1>iPad</h1>
                <h3>Lovable. Drawable. Magical.</h3>
                <div className="grid-links">
                    <a >Learn more </a>
                    <a >Buy </a>
                </div>
                <img className="img" src={img4} alt="img4"/>
            </div>

            {/* <!-- 2  --> */}
            <div className="grid-container right" id="grid2">
                <h1>Macbook Pro</h1>
                <h3>Supercharged by M2 Pro and M2 Max.</h3>
                <div className="grid-links">
                    <a >Learn more</a>
                    <a >Buy</a>
                </div>
                <img className="img" src={img5}alt="img5"/>
            </div>

            {/* <!-- 3  --> */}
            <div className="grid-container left" id="grid3">
                <h1>HomePod</h1>
                <h3>Profound sound.</h3>
                <div className="grid-links">
                    <a >Learn more</a>
                    <a >Buy</a>
                </div>
                <img className="img" src={img6} alt="img6"/>
            </div>

            {/* <!-- 4  --> */}
            <div className="grid-container right" id="grid4">
                <h1>AirPods Pro</h1>
                <h3>Rebuilt from the sound up.</h3>
                <div className="grid-links">
                    <a >Learn more</a>
                    <a >Buy</a>
                </div>
                <img className="img" src={img7} alt="img7"/>
            </div>

            {/* <!-- 5  --> */}
            <div className="grid-container left" id="grid5">
                <div style={{display:'flex', justifyContent:'center', alignItems: 'center'}}>
                    <svg style={{marginTop:'12px'}} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="2.7em" width="2.7em" xmlns="http://www.w3.org/2000/svg"><path d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z"></path></svg>
                    <h1>Fitness+</h1>
                </div>
                <h3>Welcome to the eyar of you.<br/>Now all you need is iPhone.</h3>
                <div className="grid-links">
                    <a >Learn more</a>
                    <a >Try it free</a>
                </div>
                <img className="img" src={img8} alt="img8"/>
            </div>

            {/* <!-- 6  --> */}
            <div className="grid-container right" id="grid6">
                 <div style={{display:'flex', justifyContent:'center', alignItems: 'center'}}>
                    <svg style={{marginTop:'12px'}} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="2.7em" width="2.7em" xmlns="http://www.w3.org/2000/svg"><path d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z"></path></svg>
                    <h1>Card</h1>
                </div>
                <h3>Get up to 3% Daily Cash back<br/>with every purchase.</h3>
                <div className="grid-links">
                    <a >Learn more</a>
                    <a >Apply now</a>
                </div>
                <img className="img" src={img9} alt="img9"/>
            </div>
        </div>
    </section>

    <section>

    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded // default false
      reloadOnUpdate
      static
    >
            <img className="carousel-cell"  src={slide1} alt="" />
            <img className="carousel-cell"  src={slide2} alt="" />
            <img className="carousel-cell"  src={slide3} alt="" />
            <img className="carousel-cell"  src={slide4} alt="" />
            <img className="carousel-cell"  src={slide5} alt="" />

        
    </Flickity>

    </section>

    <div className='footer'>
        <div className="footer-text">
            <p>1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in-store and online trade-in. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse or limit quantity of any trade-in transaction for any reason. More details are available from Apple’s trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply.<br/><br/>
            2. Qualified Purchasers receive an Apple Gift Card when they purchase an eligible Mac or iPad at a Qualifying Location. Only one Apple Gift Card per eligible Mac or iPad per Qualified Purchaser. Offer subject to availability. While supplies last. View full terms and conditions of offer here.<br/><br/>
            3. Apple Fitness+ requires iPhone 8 or later or Apple Watch Series 3 or later paired with iPhone 6s or later. New subscribers only. $9.99/month after trial. Plan automatically renews until cancelled. Terms apply.
            <br/><br/>
            To access and use all the features of Apple Card, you must add Apple Card to Wallet on an iPhone or iPad with the latest version of iOS or iPadOS. Update to the latest version by going to Settings - General - Software Update. Tap Download and Install.
            <br/>
            Available for qualifying applicants in the United States.
            <br/>
            Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.
            <br/>
            Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218.
            A subscription is required for Apple TV+.
            <br/>
            Major League Baseball trademarks and copyrights are used with permission of MLB Advanced Media, L.P. All rights reserved.
            </p>
            <br/>
            <hr/>
            <div className="end">
                <div className="col">
                    <div className="r1">
                        <div id="1" className="btn" onClick={showElement}>
                            <p>Shop and Learn</p>
                            <button><svg id="plus" stroke="currentColor" fill="currentColor" strokeWidth="0" t="1551322312294" viewBox="0 0 1024 1024" version="1.1" pid="10297" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z" pid="10298"></path><path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z" pid="10299"></path></svg></button>
                        </div>
                        <a >Store</a>
                        <a >Mac</a>
                        <a >iPad</a>
                        <a >iPhone</a>
                        <a >Watch</a>
                        <a >AirPods</a>
                        <a >TV & Home</a>
                        <a >AirTag</a>
                        <a >Accessories</a>
                        <a >Gift Cards</a>
                    </div>
                    <div className="r1">
                        <div id="2" className="btn" onClick={showElement}>
                            <p>Apple Wallet</p>
                            <button><svg id="plus" stroke="currentColor" fill="currentColor" strokeWidth="0" t="1551322312294" viewBox="0 0 1024 1024" version="1.1" pid="10297" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z" pid="10298"></path><path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z" pid="10299"></path></svg></button>
                        </div>
                        <a >Wallet</a>
                        <a >Apple Card</a>
                        <a >Apple Pay</a>
                        <a >Apple Cash</a>
                    </div>
                </div>
                <div className="col">
                    <div className="r1">
                        <div id="3" className="btn" onClick={showElement}>
                            <p>Account</p>
                            <button><svg id="plus" stroke="currentColor" fill="currentColor" strokeWidth="0" t="1551322312294" viewBox="0 0 1024 1024" version="1.1" pid="10297" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z" pid="10298"></path><path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z" pid="10299"></path></svg></button>
                        </div>
                        <a >Manage Your Apple ID</a>
                        <a >Apple Store Account</a>
                        <a >iCloud.com</a>
                    </div>
                    <div className="r1">
                        <div id="4" className="btn" onClick={showElement}>
                            <p>Entertainment</p>
                            <button><svg id="plus" stroke="currentColor" fill="currentColor" strokeWidth="0" t="1551322312294" viewBox="0 0 1024 1024" version="1.1" pid="10297" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z" pid="10298"></path><path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z" pid="10299"></path></svg></button>
                        </div>
                        <a >Apple One</a>
                        <a >Apple TV+</a>
                        <a >Apple Music</a>
                        <a >Apple Arcade</a>
                        <a >Apple Fitness+</a>
                        <a >Apple News+</a>
                        <a >Apple Podcasts</a>
                        <a >Apple Books</a>
                        <a >App Store</a>
                    </div>
                </div>
                <div className="col">
                    <div className="r1">
                        <div id="5" className="btn" onClick={showElement}>
                            <p>Apple Store</p>
                            <button><svg id="plus" stroke="currentColor" fill="currentColor" strokeWidth="0" t="1551322312294" viewBox="0 0 1024 1024" version="1.1" pid="10297" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z" pid="10298"></path><path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z" pid="10299"></path></svg></button>
                        </div>
                        <a >Find a Store</a>
                        <a >Genius Bar</a>
                        <a >Today at Apple</a>
                        <a >Apple Camp</a>
                        <a >Apple Store App</a>
                        <a >Certified Refurbished</a>
                        <a >Apple Trade In</a>
                        <a >Financing</a>
                        <a >Carrier Deals at Apple</a>
                        <a >Order Status</a>
                        <a >Shopping Help</a>
                    </div>
                </div>
                <div className="col">
                    <div className="r1">
                        <div id="6" className="btn" onClick={showElement}>
                            <p>For Business</p>
                            <button><svg id="plus" stroke="currentColor" fill="currentColor" strokeWidth="0" t="1551322312294" viewBox="0 0 1024 1024" version="1.1" pid="10297" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z" pid="10298"></path><path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z" pid="10299"></path></svg></button>
                        </div>
                        <a >Apple and Business</a>
                        <a >Shop for Business</a>
                    </div>
                    <div className="r1">
                        <div id="7" className="btn" onClick={showElement}>
                            <p>For Education</p>
                            <button><svg id="plus" stroke="currentColor" fill="currentColor" strokeWidth="0" t="1551322312294" viewBox="0 0 1024 1024" version="1.1" pid="10297" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z" pid="10298"></path><path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z" pid="10299"></path></svg></button>
                        </div>
                        <a >Apple and Education</a>
                        <a >Shop for K-12</a>
                        <a >Shop for College</a>
                    </div>
                    <div className="r1">
                        <div id="8" className="btn" onClick={showElement}>
                            <p>For Healthcare</p>
                            <button><svg id="plus" stroke="currentColor" fill="currentColor" strokeWidth="0" t="1551322312294" viewBox="0 0 1024 1024" version="1.1" pid="10297" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z" pid="10298"></path><path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z" pid="10299"></path></svg></button>
                        </div>
                        <a >Apple in Healthcare</a>
                        <a >Health on Apple Watch</a>
                        <a >Health Records on iPhone</a>
                    </div>
                    <div className="r1">
                        <div id="9" className="btn" onClick={showElement}>
                            <p>For Government</p>
                            <button><svg id="plus" stroke="currentColor" fill="currentColor" strokeWidth="0" t="1551322312294" viewBox="0 0 1024 1024" version="1.1" pid="10297" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z" pid="10298"></path><path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z" pid="10299"></path></svg></button>
                        </div>
                        <a >Shop for Government</a>
                        <a >Shop for Veterans and Military</a>
                    </div>
                </div>
                <div className="col">
                    <div className="r1">
                        <div id="10" className="btn" onClick={showElement}>
                            <p>Apple Values</p>
                            <button><svg id="plus" stroke="currentColor" fill="currentColor" strokeWidth="0" t="1551322312294" viewBox="0 0 1024 1024" version="1.1" pid="10297" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z" pid="10298"></path><path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z" pid="10299"></path></svg></button>
                        </div>
                        <a >Accessibility</a>
                        <a >Education</a>
                        <a >Environment</a>
                        <a >Inclusion and Diversity</a>
                        <a >Privacy</a>
                        <a >Racial Equity and Justice</a>
                        <a >Supplier Responsibility</a>
                    </div>
                    <div className="r1">
                        <div id="11" className="btn" onClick={showElement}>
                            <p>About Apple</p>
                            <button><svg id="plus" stroke="currentColor" fill="currentColor" strokeWidth="0" t="1551322312294" viewBox="0 0 1024 1024" version="1.1" pid="10297" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z" pid="10298"></path><path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z" pid="10299"></path></svg></button>
                        </div>
                        <a >Newsroom</a>
                        <a >Apple Leadership</a>
                        <a >Career Opportunities</a>
                        <a >Investors</a>
                        <a >Ethics & Compliance</a>
                        <a >Events</a>
                        <a >Contact Apple</a>
                    </div>
                </div>
            </div>
            <br />
            <p style={{textAlign:'center'}}>Thank you for seeing my work. ~GaurangP</p>
        </div>
    </div>


    </>
  )
}

export default Apple