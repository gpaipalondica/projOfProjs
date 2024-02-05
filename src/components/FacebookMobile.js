import React, { useEffect } from 'react'
import { useRef } from 'react'
import '../styles/FacebookMobile.css'
import fbReact from '../assets/fbMobile/reactions.png'
import myDp from '../assets/fbMobile/myDp.jpg'
import meta from '../assets/fbMobile/meta.png'
// import

function FacebookMobile() {

    let fbProf = myDp

    useEffect(() => {
        setTimeout(()=>{
            document.querySelector('.fb-loader').style.display='none';
        },1300)

        const currentScrollPos = window.pageYOffset;
        document.querySelector('.fb-stories').scrollLeft = 100

        let whichActive = document.querySelector('.fb-item.active')
        whichActive.innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79V20z"></path></g></svg>Home'
        
    },[])


    window.addEventListener('scroll', () => {
        if(/facebookmobile/.test(document.URL)){
        const currentScrollPos = window.pageYOffset;

        // console.log(scrollPosRef.current);
        if (currentScrollPos > scrollPosRef.current) {
          
                // console.log("down");
                document.querySelector('.fb-navigator').style.bottom = '-200px'
                document.querySelector('.fb-nav').style.top = '-100px'
                
            } else if (currentScrollPos < scrollPosRef.current) {
                // console.log('up');
                document.querySelector('.fb-navigator').style.bottom = '0'
                document.querySelector('.fb-nav').style.top = '0'

        }
        scrollPosRef.current = currentScrollPos;
        // console.log('curr2',scrollPosRef.current);
        }
    })

    const scrollPosRef = useRef(0)
    
    const fbStories = [
        {
            id:1,
            fbStoryImg: 'https://static01.nyt.com/images/2023/06/25/multimedia/00-paris-city-walk-qpwz/00-paris-city-walk-qpwz-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
            fbStoryProf: 'https://images.squarespace-cdn.com/content/v1/55ddd1ebe4b09069ee8217fc/1679096164973-REW1UE8JGE3H8ERMZ5AM/image-asset.jpeg?format=1500w',
            fbStoryName: 'Emilia Clark',
            timeline: '2h'
        },
        {
            id:2,
            fbStoryImg: 'https://www.madametussauds.com/amsterdam/media/clfe2hzp/_dsc7120-chris-hemsworth-as-thor-mta-2016.jpg',
            fbStoryProf: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_FjY5HL7PPwyDzmlmvbhrRTcWkMVvBgrs_g&usqp=CAU',
            fbStoryName: 'Chris Hemsworth',
            timeline: '4h'
        },
        {
            id:3,
            fbStoryImg: 'https://th-thumbnailer.cdn-si-edu.com/q204g25_LKw1lgZL9nJKj4tvhpM=/800x800/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/04/8e/048ed839-a581-48af-a0ae-fac6fec00948/gettyimages-168346757_web.jpg',
            fbStoryProf: 'https://thumbs.dreamstime.com/b/long-haired-brunette-girl-smiling-square-background-ambulance-portrait-european-woman-blue-sweatshirt-female-city-153558409.jpg',
            fbStoryName: 'Judy Gomes',
            timeline: '13h'
        },
        {
            id:4,
            fbStoryImg: 'https://images.pexels.com/photos/1010519/pexels-photo-1010519.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            fbStoryProf: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROcfSxyxYv4AvIzKVM-UvRwOGm9B3gebAE3zez5uNbEssrPioBcEiBkV-1273O1iHWR50&usqp=CAU',
            fbStoryName: 'Arijit Singh',
            timeline: '22h'
        },


    ]

    const fbPosts = [
        {
            id:11,
            fbDp: 'https://c-cl.cdn.smule.com/rs-s79/arr/0a/81/a33671e4-d41d-42f3-9d38-d4f7f114079d.jpg',
            fbName: 'Arijit Singh',
            verfied: true,
            created: '14 hrs',
            fbPost: 'https://www.radioandmusic.com/sites/www.radioandmusic.com/files/Arijit%20K%203.PNG',
            fbPostCaption: 'California shows SOLD OUT !!!',
            fbLikes: 120000,
            fbComments: 30000,
        },
        {
            id:12,
            fbDp: 'https://images.squarespace-cdn.com/content/v1/55ddd1ebe4b09069ee8217fc/1679096164973-REW1UE8JGE3H8ERMZ5AM/image-asset.jpeg?format=1500w',
            fbName: 'Emilia Clark',
            verfied: false,
            created: '1 day',
            fbPost: 'https://centurionlifestyle.com/wp-content/uploads/2022/12/exotic-cars-1920x1080.jpg',
            fbPostCaption: 'Not my car !! 😜',
            fbLikes: 999,
            fbComments: 0,
        },
        {
            id:13,
            fbDp: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_FjY5HL7PPwyDzmlmvbhrRTcWkMVvBgrs_g&usqp=CAU',
            fbName: 'Chris Hemsworth',
            verfied: true,
            created: '4 days',
            fbPost: 'https://m.media-amazon.com/images/I/91zzAMkVCUL._AC_UF894,1000_QL80_.jpg',
            fbPostCaption: 'In Movie Theatres near you',
            fbLikes: 1400,
            fbComments: 300,
        },
        {
            id:14,
            fbDp: myDp,
            fbName: 'Gaurang Pai Palondicar',
            verfied: true,
            created: '1 day',
            fbPost: 'https://onlinemasters.jou.ufl.edu/wp-content/uploads/2017/05/thank-you.jpg',
            fbPostCaption: 'Thank You for seeing my work !!',
            fbLikes: 10000,
            fbComments: 3000,
        },
       
    ]

    function formatLikes(t){
        let aa = t;
        // console.log(aa);
        let res = (aa / 1000)
        
        if (res % 1 === 0) {
            return res + 'K';
          } else {
            return res.toFixed(1) + 'K';
          }
    }

    function formatComments(tt){
        let aaa = tt
        let res2 = (aaa/1000)

        if(res2 % 1 === 0){
            return res2 + 'K'
        }else{
            return res2.toFixed(1)+ 'K'
        }

    }
    
    let fbTime

    function showStory(s){
        let newId = s.currentTarget
        // console.log(newId);

        let fbName = newId.querySelector('.fb-story-name').innerHTML;
        let fbDp = newId.querySelector('.fb-story-profile').src;
        let fbStoryBg = newId.querySelector('.fb-story-img').style.backgroundImage
        console.log(fbStoryBg);
        let fbStoryTime = newId.querySelector('.fb-story-timeline').innerHTML
        setTimeout(() =>{
            document.querySelector('.fb-openStory').style.display = 'block'
            document.querySelector('.fb-story-open-profile').src = fbDp
            document.querySelector('.fb-openStory-img').style.backgroundImage = fbStoryBg;
            document.querySelector('.fb-story-open-name').innerHTML = fbName+'<span>'+fbStoryTime+'<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 100-6 3 3 0 000 6zm-5.784 6A2.238 2.238 0 015 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 005 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" clipRule="evenodd"></path></svg> </span>'
        },200)


        fbTime = setTimeout(() =>{
            document.querySelector('.fb-openStory').style.display = 'none'
        },5300)
    }
    
    function closeStory(){
        document.querySelector('.fb-openStory').style.display = 'none'
        clearTimeout(fbTime)
    }


    function openMenu(t){
        // console.log("yaass");
        let postName = t.currentTarget.parentNode.parentNode.querySelector('.fb-post-prof-name h6').innerHTML
        // console.log(postName);
        if(postName.includes('svg')){
            postName = postName.split('<svg')[0]
            // console.log(postName);
        }
        let namePut = document.querySelectorAll('#fbName-put'),i 
        for(i=0;i<namePut.length; i++){
            namePut[i].innerHTML = postName
        }
        document.querySelector('.fb-option-container').style.bottom = '0px'
        setTimeout(()=>{
            document.querySelector('.fb-opt-bg').style.display = 'block';
        },300)
    }
    
    
    function closeMenu(){
        document.querySelector('.fb-opt-bg').style.display = 'none';
        document.querySelector('.fb-option-container').style.bottom = '-100%'
        
    }

  return (
    <div className='fb-screenSize'>

        <div className="fb-loader">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
            <div style={{position: 'fixed', bottom: '10px', textAlign:'center'}}>
                <p style={{fontSize:'18px', color:'#aaa',transform: 'scaleY(0.8)',marginBottom:'5px'}}>from</p>
                <img src={meta} alt="" />
            </div>
        </div>

        <div className="fb-openStory">
            <div className="fb-storyLine"></div>
            <div className="fb-openStory-header">
                <div className="fb-openStory-details">
                    <img className="fb-story-open-profile" src="https://irezumiempire.com/cdn/shop/products/download_19.png?v=1665463817" alt="" />
                    <p className="fb-story-open-name">Ramesh Suresh <span>4h <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 100-6 3 3 0 000 6zm-5.784 6A2.238 2.238 0 015 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 005 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" clipRule="evenodd"></path></svg> </span></p>
                </div>
                <div className="fb-openStory-close">
                        <button><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 9.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" clipRule="evenodd"></path></svg></button>
                        <button onClick={closeStory}><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg></button>
                </div> 
            </div>
            <div className="fb-openStory-img">
                <img src="" alt="" />
            </div>
            <div className="fb-openStory-react">
                <input type="text" id="fname" name="fname" placeholder='Write Comment...' />
                <img src={fbReact} alt="" />
            </div>

        </div>

        <div className='fb-nav-mind' style={{display:'flex', flexDirection:'column'}}>
            <div className="fb-nav">
                <h3>facebook</h3>
                <div className="fb-nav-buttons">
                    <button>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="2" viewBox="0 0 1024 1024" version="1.1"  xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path><path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z" ></path></svg>
                    </button>
                    <button>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="1" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M19.023,16.977c-0.513-0.488-1.004-0.997-1.367-1.384c-0.372-0.378-0.596-0.653-0.596-0.653l-2.8-1.337 C15.34,12.37,16,10.763,16,9c0-3.859-3.14-7-7-7S2,5.141,2,9s3.14,7,7,7c1.763,0,3.37-0.66,4.603-1.739l1.337,2.8 c0,0,0.275,0.224,0.653,0.596c0.387,0.363,0.896,0.854,1.384,1.367c0.494,0.506,0.988,1.012,1.358,1.392 c0.362,0.388,0.604,0.646,0.604,0.646l2.121-2.121c0,0-0.258-0.242-0.646-0.604C20.035,17.965,19.529,17.471,19.023,16.977z M9,14 c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5S11.757,14,9,14z"></path></svg>
                    </button>
                    <button>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z"></path></svg>
                    </button>
                </div>
            </div>

            <div className="fb-mind">
                <div className="fb-mind-left">
                    <div className="fb-mind-img">
                        <img src={fbProf} alt="" />
                    </div>
                    <p>What's on your mind?</p>
                </div>
                <div className="fb-mind-right">
                <svg stroke="green" fill="green" strokeWidth="0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.002 4h-10a1 1 0 00-1 1v8a1 1 0 001 1h10a1 1 0 001-1V5a1 1 0 00-1-1zm-10-1a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2h-10z" clipRule="evenodd"></path><path d="M10.648 8.646a.5.5 0 01.577-.093l1.777 1.947V14h-12v-1l2.646-2.354a.5.5 0 01.63-.062l2.66 1.773 3.71-3.71z"></path><path fillRule="evenodd" d="M4.502 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM4 2h10a1 1 0 011 1v8a1 1 0 01-1 1v1a2 2 0 002-2V3a2 2 0 00-2-2H4a2 2 0 00-2 2h1a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                </div>
            </div>
        </div>

        

        {/* stories  */}
        <div className="fb-stories">

            <div className="fb-story">
                <div className="fb-story-music">
                    <i className="fas fa-music"></i><span></span>
                    <p>Music</p>
                </div>
            </div>

            <div className="fb-story" id='fb-story-0'>
                <img src={fbProf} alt="" />
                <div className="fb-story-create">
                <button>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="2" viewBox="0 0 1024 1024" version="1.1"  xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path><path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z" ></path></svg>
                </button>
                <p>Create story</p>
                </div>
            </div>

            {/* others  */}

            {fbStories.map((f,key) => {
                return(
                <div key={key+f.id} onClick={showStory} className="fb-story" id={'fb-story'+f.id}>
                    <div className="fb-story-img" style={{backgroundImage:'url('+f.fbStoryImg+')'}} ></div>
                    <img className="fb-story-profile"  src={f.fbStoryProf} alt="" />
                    <p className="fb-story-name">{f.fbStoryName}</p>
                    <span className='fb-story-timeline' style={{display:'none'}}>{f.timeline}</span>
                </div>

                )
            })}

               
        </div>

        <div className="fb-post-container">

        {fbPosts.map((fbp, key) => {
            return(
            <div key={key+fbp.id} className="fb-posts">
            <div className="fb-post-header">
                <div className="fb-post-header-left">
                    <div className="fb-post-prof-dp">
                        <img src={fbp.fbDp} alt="" />
                    </div>

                    <div className="fb-post-prof-name">
                        <h6>{fbp.fbName} {fbp.verfied?<svg stroke="currentColor" fill="#4FB0FF" strokeWidth="0" viewBox="0 0 16 16" height=".8em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M15.67 7.066l-1.08-1.34a1.5 1.5 0 0 1-.309-.77l-.19-1.698a1.51 1.51 0 0 0-1.329-1.33l-1.699-.19c-.3-.03-.56-.159-.78-.329L8.945.33a1.504 1.504 0 0 0-1.878 0l-1.34 1.08a1.5 1.5 0 0 1-.77.31l-1.698.19c-.7.08-1.25.63-1.33 1.329l-.19 1.699c-.03.3-.159.56-.329.78L.33 7.055a1.504 1.504 0 0 0 0 1.878l1.08 1.34c.17.22.28.48.31.77l.19 1.698c.08.7.63 1.25 1.329 1.33l1.699.19c.3.03.56.159.78.329l1.339 1.08c.55.439 1.329.439 1.878 0l1.34-1.08c.22-.17.48-.28.77-.31l1.698-.19c.7-.08 1.25-.63 1.33-1.329l.19-1.699c.03-.3.159-.56.329-.78l1.08-1.339a1.504 1.504 0 0 0 0-1.878zM6.5 12.01L3 8.51l1.5-1.5 2 2 5-5L13 5.56l-6.5 6.45z"></path></svg>:''}</h6>
                        <p>{fbp.created} &#x2022; <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"></path></svg></p>
                    </div>
                </div>

                <div className="fb-post-header-right">
                    <button onClick={openMenu}><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 9.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" clipRule="evenodd"></path></svg></button>
                    <button><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg></button>
                </div>         
            </div>
                <div className="fb-post-caption">{fbp.fbPostCaption}</div>
                <img className='fb-post-image' src={fbp.fbPost} alt="" />

                <div className="fb-like-comment">

                    <div className="fb-likes-part">
                    {fbp.fbLikes > 0 ? 
                        <>
                        <div className="fb-likes">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1z"></path></svg>
                        </div>
                        <p style={{fontSize:'15px'}}>{fbp.fbLikes > 999? formatLikes(fbp.fbLikes) : fbp.fbLikes}</p>
                        </>
                        :
                        ''
                    }
                    </div>
                        
                    <div className="fb-comments-part">
                        {fbp.fbComments > 0 ? 
                            <p style={{fontSize:'15px'}} className="fb-comments">{fbp.fbComments > 999 ? formatComments(fbp.fbComments) : fbp.fbComments} comments</p>
                            :
                            ''
                        }
                    </div>
                </div>

                <div className="fb-hr-div">
                    <hr className='fb-hr' />
                </div>

                <div className="fb-post-footer">
                    <button className="fb-post-footer-button"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0 1 42.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z"></path></svg>Like</button>
                    <button className="fb-post-footer-button"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"></path></svg>Comment</button>
                    <button className="fb-post-footer-button"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M13 14h-2a8.999 8.999 0 0 0-7.968 4.81A10.136 10.136 0 0 1 3 18C3 12.477 7.477 8 13 8V2.5L23.5 11 13 19.5V14zm-2-2h4v3.308L20.321 11 15 6.692V10h-2a7.982 7.982 0 0 0-6.057 2.773A10.988 10.988 0 0 1 11 12z"></path></g></svg>Share</button>
                </div>
            </div>
        )
        })}

        <p style={{marginTop:'20px',textAlign:'center', color:'gray'}}>You're all caught up for now</p>

        </div>

        <div className="fb-navigator">
            <a className='fb-item active'><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79V20zm-2-1V9.978l-7-5.444-7 5.444V19h14z"></path></g></svg>Home</a>
            <a className='fb-item' ><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-6l-7 4V7z"></path></svg>Video</a>
            <a className='fb-item' ><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M882 272.1V144c0-17.7-14.3-32-32-32H174c-17.7 0-32 14.3-32 32v128.1c-16.7 1-30 14.9-30 31.9v131.7a177 177 0 0 0 14.4 70.4c4.3 10.2 9.6 19.8 15.6 28.9v345c0 17.6 14.3 32 32 32h274V736h128v176h274c17.7 0 32-14.3 32-32V535a175 175 0 0 0 15.6-28.9c9.5-22.3 14.4-46 14.4-70.4V304c0-17-13.3-30.9-30-31.9zm-72 568H640V704c0-17.7-14.3-32-32-32H416c-17.7 0-32 14.3-32 32v136.1H214V597.9c2.9 1.4 5.9 2.8 9 4 22.3 9.4 46 14.1 70.4 14.1s48-4.7 70.4-14.1c13.8-5.8 26.8-13.2 38.7-22.1.2-.1.4-.1.6 0a180.4 180.4 0 0 0 38.7 22.1c22.3 9.4 46 14.1 70.4 14.1 24.4 0 48-4.7 70.4-14.1 13.8-5.8 26.8-13.2 38.7-22.1.2-.1.4-.1.6 0a180.4 180.4 0 0 0 38.7 22.1c22.3 9.4 46 14.1 70.4 14.1 24.4 0 48-4.7 70.4-14.1 3-1.3 6-2.6 9-4v242.2zm0-568.1H214v-88h596v88z"></path></svg>Marketplace</a>
            <a className='fb-item' ><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3-30 71.7H60.6l182.5 186.5c7.1 7.3 18.6 7.3 25.7 0L451.4 288H342.3l-22.1-44.2zM473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z"></path></svg>Dating</a>
            <a className='fb-item' ><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 16a2 2 0 002-2H6a2 2 0 002 2zm.995-14.901a1 1 0 10-1.99 0A5.002 5.002 0 003 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"></path></svg>Notifications</a>
            <a className='fb-item' ><svg stroke="currentColor" fill="currentColor" strokeidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1 2.5A1.5 1.5 0 012.5 1h3A1.5 1.5 0 017 2.5v3A1.5 1.5 0 015.5 7h-3A1.5 1.5 0 011 5.5v-3zm8 0A1.5 1.5 0 0110.5 1h3A1.5 1.5 0 0115 2.5v3A1.5 1.5 0 0113.5 7h-3A1.5 1.5 0 019 5.5v-3zm-8 8A1.5 1.5 0 012.5 9h3A1.5 1.5 0 017 10.5v3A1.5 1.5 0 015.5 15h-3A1.5 1.5 0 011 13.5v-3zm8 0A1.5 1.5 0 0110.5 9h3a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-3A1.5 1.5 0 019 13.5v-3z" clipRule="evenodd"></path></svg>Menu</a>
        </div>

        <div className="fb-opt-bg" onClick={closeMenu}></div>

        <div className="fb-option-container">

            <hr />

            <div className="fb-option">

                <div className="fb-op1" style={{display:'flex', alignItems: 'center', gap:'15px'}}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm90.5 224H272v74.5c0 8.8-7.2 16-16 16-4.4 0-8.4-1.8-11.3-4.7-2.9-2.9-4.7-6.9-4.7-11.3V272h-74.5c-4.4 0-8.4-1.8-11.3-4.7-2.9-2.9-4.7-6.9-4.7-11.3 0-8.8 7.2-16 16-16H240v-74.5c0-8.8 7.2-16 16-16s16 7.2 16 16V240h74.5c8.8 0 16 7.2 16 16s-7.2 16-16 16z"></path></svg>
                    <div className="fb-op1-text">
                        <h4>Show More</h4>
                        <p>More suggested posts in your Feed will be like this.</p>
                    </div>
                </div>
                <div className="fb-op1" style={{display:'flex', alignItems: 'center', gap:'15px'}}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"></path></svg>
                    <div className="fb-op1-text">
                        <h4>Show Less</h4>
                        <p>Less suggested posts in your Feed will be like this.</p>
                    </div>
                </div>
            </div>
            <div className="fb-option">
            <div className="fb-op1" style={{display:'flex', alignItems: 'center', gap:'15px'}}>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><path d="M224 30v256h-64l96 128 96-128h-64V30h-64zM32 434v48h448v-48H32z"></path></svg>
                    <div className="fb-op1-text">
                        <h4>Save Video</h4>
                        <p>Add this to your saved videos.</p>
                    </div>
                </div>
                <div className="fb-op1" style={{display:'flex', alignItems: 'center', gap:'15px'}}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path></svg>
                    <div className="fb-op1-text">
                        <h4>Hide Post</h4>
                        <p>See fewer posts like this.</p>
                    </div>
                </div>
                <div className="fb-op1" style={{display:'flex', alignItems: 'center', gap:'15px'}}>
                <svg style={{minWidth:'1.4em'}} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z"></path></g></svg>
                    <div className="fb-op1-text">
                        <h4>Report video broadcast</h4>
                        <p>We won't let <span id='fbName-put'></span> know who reported this.</p>
                    </div>
                </div>
                <div className="fb-op1" style={{display:'flex', alignItems: 'center', gap:'15px'}}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><path d="M8 16a2 2 0 002-2H6a2 2 0 002 2zm.995-14.901a1 1 0 10-1.99 0A5.002 5.002 0 003 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"></path></svg>
                    <div className="fb-op1-text">
                        <h4>Turn on notifications for this post</h4>
                    </div>
                </div>
            </div>
            <div className="fb-option">
            <div className="fb-op1" style={{display:'flex', alignItems: 'center', gap:'15px'}}>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm176.5 585.7l-28.6 39a7.99 7.99 0 0 1-11.2 1.7L483.3 569.8a7.92 7.92 0 0 1-3.3-6.5V288c0-4.4 3.6-8 8-8h48.1c4.4 0 8 3.6 8 8v247.5l142.6 103.1c3.6 2.5 4.4 7.5 1.8 11.1z"></path></svg>
                    <div className="fb-op1-text">
                        <h4>Snooze <span id='fbName-put'></span> for 30 days</h4>
                        <p>Temporarily stop seeing posts.</p>
                    </div>
                </div>
                <div className="fb-op1" style={{display:'flex', alignItems: 'center', gap:'15px'}}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 11h4"></path></svg>
                    <div className="fb-op1-text">
                        <h4>Hide all from <span id='fbName-put'></span></h4>
                        <p>Stop seeing posts from this Page.</p>
                    </div>
                </div>
                <div className="fb-op1" style={{display:'flex', alignItems: 'center', gap:'15px'}}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM11 12H8v2h3v3h2v-3h3v-2h-3V9h-2v3z"></path></g></svg>
                    <div className="fb-op1-text">
                        <h4>Follow <span id='fbName-put'></span></h4>
                        <p>See posts from <span id='fbName-put'></span>.</p>
                    </div>
                </div>
            </div>
            <div className="fb-option">
                <div style={{display:'flex', gap:'10px'}}>
                    <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M7 3C8.86384 3 10.4299 4.27477 10.874 6H19V8H10.874C10.4299 9.72523 8.86384 11 7 11C4.79086 11 3 9.20914 3 7C3 4.79086 4.79086 3 7 3ZM7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M17 20C15.1362 20 13.5701 18.7252 13.126 17H5V15H13.126C13.5701 13.2748 15.1362 12 17 12C19.2091 12 21 13.7909 21 16C21 18.2091 19.2091 20 17 20ZM17 18C18.1046 18 19 17.1046 19 16C19 14.8954 18.1046 14 17 14C15.8954 14 15 14.8954 15 16C15 17.1046 15.8954 18 17 18Z" fill="currentColor"></path></svg>
                    <h4>Manage your Feed</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FacebookMobile