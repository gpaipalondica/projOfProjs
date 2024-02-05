import React from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../../styles/moviesCss/Movies.css'
import { AllMovies } from './AllMovies'
import Movies from './Movies'
import MovieSearch from './MovieSearch'

function MovieNavbar() {

    const [mToggler, setMToggler] = useState(false)
    const [searchBar, setSearchBar] = useState(true)

    let {id} = useParams()
    let navigate = useNavigate()

    function movieToggler(){
        if(mToggler == true){
          setMToggler(!mToggler)
          document.querySelector('.mTogglerContent').style.right = '-600px'
        }
        else if(mToggler == false){
          setMToggler(!mToggler)
          document.querySelector('.mTogglerContent').style.right = '0px'
        }
      }

      let val

      function searchMe(event){
        event.preventDefault()
        
        val = document.getElementById('searchVal').value
        if(val.length < 3){
          alert("Enter atleast 3 characters")
        }
        else{
          id = val
          navigate(`/moviemania/search/${id}`)
        }
      }



      function showSearchBar(){
          if(searchBar){
            document.querySelector('.movie-search').style.top = '50px'
            document.querySelector('#searchVal').focus()
            setSearchBar(!searchBar)
          }else{
            document.querySelector('.movie-search').style.top = '-100px'
            setSearchBar(!searchBar)
          }
        }



  return (
    <>
    <div className="movie-navbar">
          <div className="movie-nav-contents">
            <a id='mov-logo' href='/moviemania'>MovieMania</a>
            <a href="#">Home</a>
            <a href="#">Movies</a>
            <a href="#">TV Shows</a>
            <a href="#">Browse by Languages</a>
          </div>
          <div className="movie-nav-account">
            <svg onClick={showSearchBar} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg>
            <div className="movie-user">
              <p>Hello, <span>NewUser</span></p>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M12,8c-1.178,0-2,0.822-2,2s0.822,2,2,2s2-0.822,2-2S13.178,8,12,8z"></path><path fill="none" d="M12,4c-4.337,0-8,3.663-8,8c0,2.176,0.923,4.182,2.39,5.641c0.757-1.8,2.538-3.068,4.61-3.068h2 c2.072,0,3.854,1.269,4.61,3.068C19.077,16.182,20,14.176,20,12C20,7.663,16.337,4,12,4z M12,14c-2.28,0-4-1.72-4-4s1.72-4,4-4 s4,1.72,4,4S14.28,14,12,14z"></path><path fill="none" d="M13,16.572h-2c-1.432,0-2.629,1.01-2.926,2.354C9.242,19.604,10.584,20,12,20s2.758-0.396,3.926-1.073 C15.629,17.582,14.432,16.572,13,16.572z"></path><path d="M12,2C6.579,2,2,6.579,2,12c0,3.189,1.592,6.078,4,7.924V20h0.102C7.77,21.245,9.813,22,12,22s4.23-0.755,5.898-2H18 v-0.076c2.408-1.846,4-4.734,4-7.924C22,6.579,17.421,2,12,2z M8.074,18.927c0.297-1.345,1.494-2.354,2.926-2.354h2 c1.432,0,2.629,1.01,2.926,2.354C14.758,19.604,13.416,20,12,20S9.242,19.604,8.074,18.927z M17.61,17.641 c-0.757-1.8-2.538-3.068-4.61-3.068h-2c-2.072,0-3.854,1.269-4.61,3.068C4.923,16.182,4,14.176,4,12c0-4.337,3.663-8,8-8 s8,3.663,8,8C20,14.176,19.077,16.182,17.61,17.641z"></path><path d="M12,6c-2.28,0-4,1.72-4,4s1.72,4,4,4s4-1.72,4-4S14.28,6,12,6z M12,12c-1.178,0-2-0.822-2-2s0.822-2,2-2s2,0.822,2,2 S13.178,12,12,12z"></path></svg>
            </div>
            <div className='movie-toggler' onClick={movieToggler}>
            <i className={mToggler ? 'fas fa-times' : 'fas fa-bars'} style={{color:'#fff'}} />
            </div>
          </div>
    </div>
    <div className="movie-search">
          <form onSubmit={searchMe}>
            <input id='searchVal' type="text" placeholder="Type here.." name="search" />
            <button type="submit">Search</button>
          </form>
    </div>
    </>
  )
}

export default MovieNavbar