import React, { useEffect } from 'react'
import '../styles/Home.css'
import Pic1 from '../assets/pic1.jpeg'
import { HomeList } from './HomeList';
import {useNavigate } from 'react-router-dom'
import { useRef } from 'react';

function Home() {

    // console.log({HomeList});
    let index
    let curr_index = useRef()
     
    //styling
     let s1 = 'background-color:#91BAD6; border: 1px solid rgba(0,0,0,0.2); left: calc(50% - 200px); z-index: 1; height: calc(100% - 100px); transition: .5s ease-in-out; filter: opacity(.5);'

     let s2 = 'background-color:#73A5C6; border: 1px solid rgba(0,0,0,0.2); left: calc(50% - 120px); z-index: 2; height: calc(100% - 50px);  transition: .5s ease-in-out'

     let s3 = " z-index: 3; background-color: #528AAE; border: 3px solid white; transition: .5s ease-in-out"

     let s4 = 'background-color:#73A5C6; border: 1px solid rgba(0,0,0,0.2); left: calc(50% + 120px); z-index: 2; height: calc(100% - 50px); transition: .5s ease-in-out'

     let s5 = 'background-color:#91BAD6; border: 1px solid rgba(0,0,0,0.2); left: calc(50% + 200px); z-index: 1; height: calc(100% - 100px); transition: .5s ease-in-out; filter: opacity(.5);'


    useEffect(() => {
        
        let gridMain = document.querySelector('.grid-main')
        const allCards = document.querySelectorAll('.grid-box');

        if(sessionStorage.getItem('actCard') === null){
            allCards[0].style.cssText = 'z-index: 3; background-color: #528AAE; border: 3px solid white;'
            allCards[1].style.cssText = 'background-color:#73A5C6;border: 1px solid rgba(0,0,0,0.2); left: calc(50% + 120px); z-index: 2; height: calc(100% - 50px);transition: .8s ease; '
            allCards[2].style.cssText = 'background-color:#91BAD6;border: 1px solid rgba(0,0,0,0.2); left: calc(50% + 200px); z-index: 1; height: calc(100% - 100px);transition: 1.6s ease; filter: opacity(.5);'
            document.querySelector('.left-arrow').style.cssText ='filter:brightness(.4);pointer-events:none'
            document.getElementById('box_1').classList.add('active')
        }else{
            let actID = sessionStorage.getItem('actCard').split('_')[1]
            let r1 = parseInt(actID)-3;
            let r2 = parseInt(actID)-2;
            let r3 = parseInt(actID)-1;
            let r4 = parseInt(actID);
            let r5 = parseInt(actID)+1;
            
            if(r3 === 0){
                document.querySelector('.left-arrow').style.cssText ='filter:brightness(.4);pointer-events:none'
            }
            
            if(r3 === allCards.length-1){
                document.querySelector('.right-arrow').style.cssText ='filter:brightness(.4);pointer-events:none'
            }

            if(r1 >= 0){
                allCards[r1].style.cssText = 'background-color:#91BAD6;border: 1px solid rgba(0,0,0,0.2); left: calc(50% - 200px); z-index: 1; height: calc(100% - 100px);transition: 1.6s ease; filter: opacity(.5);'
            }
            if(r2 >= 0){
                allCards[r2].style.cssText = 'background-color:#73A5C6;border: 1px solid rgba(0,0,0,0.2); left: calc(50% - 120px); z-index: 2; height: calc(100% - 50px);transition: .8s ease; '
            }
            allCards[r3].style.cssText = 'z-index: 3; background-color: #528AAE; border: 3px solid white;'
            if(r4 <= allCards.length-1){
                allCards[r4].style.cssText = 'background-color:#73A5C6;border: 1px solid rgba(0,0,0,0.2); left: calc(50% + 120px); z-index: 2; height: calc(100% - 50px);transition: .8s ease; '
            }
            if(r5 <= allCards.length-1){
                allCards[r5].style.cssText = 'background-color:#91BAD6;border: 1px solid rgba(0,0,0,0.2); left: calc(50% + 200px); z-index: 1; height: calc(100% - 100px);transition: 1.6s ease; filter: opacity(.5);'
            }

            curr_index = parseInt(actID)
            document.getElementById('box_'+actID).classList.add('active')
        }

        setTimeout(()=>{
            document.querySelector('.heading').style.cssText = 'margin-top:-50px'
        },100)

        setTimeout(()=>{
            gridMain.style.cssText = 'opacity:1'
        },600)

    },[curr_index.current])

    const navigate = useNavigate()

    const view = event =>{
        // console.log(event.currentTarget.id);
        let proj_id = event.currentTarget.id;

        if(proj_id === 'p1'){
            navigate('/appleweb');
        }
        else if(proj_id === 'p2'){
            navigate('/lamborghini');
        }
        else if(proj_id === 'p3'){
            navigate('/starbucks');
        }
        else if(proj_id === 'p4'){
            navigate('/pizzaweb');
        }
        else if(proj_id === 'p5'){
            navigate('/moviemania');
        }
        else if(proj_id === 'p6'){
            navigate('/facebookmobile');
        }
    }

    function shift(t){

        let all_cards = document.querySelectorAll('.grid-box'),j;
        let length = all_cards.length

        for(j=0; j<all_cards.length;j++){
            all_cards[j].style.cssText = ''
        }

        let text = t.currentTarget.className
        // console.log(text);

        index = document.querySelector('.grid-box.active').id.split('_')[1]
        curr_index = parseInt(index)
        // console.log(curr_index);


        //initial
        if(curr_index === 1 && text === 'right-arrow'){
            // console.log("Hey");
            document.querySelector('.left-arrow').style.cssText +='filter:brightness(1); pointer-events:all'
        }else if(curr_index === 1 && text === 'left-arrow'){
            document.querySelector('.left-arrow').style.cssText +='filter:brightness(.4); pointer-events:none'
        }else if(curr_index <= length){
            document.querySelector('.right-arrow').style.cssText +='filter: brightness(1); pointer-events:all'
        }

        //remove active
        let cards = document.querySelectorAll('.grid-box'),i;
        for(i=0; i<cards.length;i++){
            cards[i].classList.remove('active')
            cards[i].querySelector('.btnss').style.cssText += 'opacity:0;'
        }
            

        if(curr_index <= cards.length && curr_index > 0){

            if(text === 'right-arrow'){
                    let new_index = curr_index+1 
                    // console.log("NI",new_index);
                    document.getElementById('box_'+new_index).classList.add('active')  
                    sessionStorage.setItem('actCard','box_'+new_index)
                    setTimeout(() => {
                        document.querySelector('.grid-box.active .btnss').style.cssText += 'opacity:1'
                    }, 300)
                    
                    if(new_index === cards.length){
                        document.querySelector('.right-arrow').style.cssText +='filter:brightness(.4);pointer-events:none'
                    }

                anime(new_index)
            }
            else if(text === 'left-arrow'){
                let new_index = curr_index-1 
                // console.log("NI",new_index);
                document.getElementById('box_'+new_index).classList.add('active') 
                sessionStorage.setItem('actCard','box_'+new_index)
                
                setTimeout(() => {
                    document.querySelector('.grid-box.active .btnss').style.cssText += 'opacity:1'
                }, 300)
                
                if(new_index === 1){
                    document.querySelector('.left-arrow').style.cssText +='filter:brightness(.4); pointer-events:none'
                }

                anime(new_index)
                
            }
                
        } 


        function anime(new_index){

            document.getElementById('box_'+new_index).style.cssText = s3

            let one = new_index - 2;
            let two = new_index - 1;
            let four = new_index + 1;
            let five = new_index + 2;

            if(one && one>0){
                document.getElementById('box_'+one).style.cssText = s1
            }
            if(two && two>0){
                document.getElementById('box_'+two).style.cssText = s2
            }
            if(four && four<=length){
                document.getElementById('box_'+four).style.cssText = s4
            }
            if(five && five<=length){
                document.getElementById('box_'+five).style.cssText = s5
            }
        }
        
    }
  

  return (
    <div className='home'>
        <img className='bg-img' src={Pic1} alt="" />
        <div className="content">
            <h1 className='heading'>Welcome to the Project of Projects</h1>
            <div className="grid-main">
                {HomeList.map((homeItem, key) => {
                    return (
                        <div key={key} className={'grid-box'} id={'box_'+homeItem.id+''}>
                            <div className="proj-details">
                                <h3 className="proj-title">{homeItem.projTitle}</h3>
                                <p className="proj-descr">{homeItem.projDescr}</p>
                                <div className="btnss">
                                    <button id={'p'+homeItem.id} className="web" onClick={view}>View Project</button>
                                    <button onClick={() => window.open(homeItem.gitH, "_blank")}  className="gith">GitHub</button>
                                </div>
                            </div>  
                        </div>
                )})}    
            </div>

            <div className="left-arrow" onClick={shift}><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm104 316.9c0 10.2-4.9 19.9-13.2 25.9L457.4 512l145.4 105.2c8.3 6 13.2 15.6 13.2 25.9V690c0 6.5-7.4 10.3-12.7 6.5l-246-178a7.95 7.95 0 0 1 0-12.9l246-178a8 8 0 0 1 12.7 6.5v46.8z"></path></svg></div>
            <div className="right-arrow" onClick={shift}><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm154.7 454.5l-246 178c-5.3 3.8-12.7 0-12.7-6.5v-46.9c0-10.2 4.9-19.9 13.2-25.9L566.6 512 421.2 406.8c-8.3-6-13.2-15.6-13.2-25.9V334c0-6.5 7.4-10.3 12.7-6.5l246 178c4.4 3.2 4.4 9.8 0 13z"></path></svg></div>
            
            {/* <div className='stacklist' onClick={handleCssToggle}>              
             {stackList ? <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1 2.5A1.5 1.5 0 012.5 1h3A1.5 1.5 0 017 2.5v3A1.5 1.5 0 015.5 7h-3A1.5 1.5 0 011 5.5v-3zM2.5 2a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3zm6.5.5A1.5 1.5 0 0110.5 1h3A1.5 1.5 0 0115 2.5v3A1.5 1.5 0 0113.5 7h-3A1.5 1.5 0 019 5.5v-3zm1.5-.5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3zM1 10.5A1.5 1.5 0 012.5 9h3A1.5 1.5 0 017 10.5v3A1.5 1.5 0 015.5 15h-3A1.5 1.5 0 011 13.5v-3zm1.5-.5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3zm6.5.5A1.5 1.5 0 0110.5 9h3a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-3A1.5 1.5 0 019 13.5v-3zm1.5-.5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3z" clipRule="evenodd"></path></svg> :<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M20.083 10.5l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm0 4.7l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zM12.514 1.309l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0z"></path></g></svg>} 
            </div>*/}
        </div>
    </div>
  )
}

export default Home