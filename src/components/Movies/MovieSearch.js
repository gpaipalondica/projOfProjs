import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import MovieNavbar from './MovieNavbar';
import {AllMovies} from './AllMovies'
import '../../styles/moviesCss/MovieSearch.css'

function MovieSearch() {

    useEffect(()=>{
        setTimeout(() => {
          document.querySelector('.movie-loader-bg').style.opacity='0'
        }, 1000)
        setTimeout(() => {
          document.querySelector('.movie-loader-bg').style.display='none'
        }, 1100)
        
      },[])

    let {id} = useParams()
    console.log(id)

    let searchTitle = id.toLowerCase()

    let filteredMovies = AllMovies.filter(movie => movie["Title"].toLowerCase().includes(searchTitle));



    console.log(filteredMovies);

    let navigateTo = useNavigate()

    function displaySelectedMovie(e){
        let selectedMovie = e.target
        let showMovieNow = selectedMovie.querySelector('.search-m-title').innerHTML

        console.log(selectedMovie);
        console.log(showMovieNow);

        navigateTo(`/moviemania/${showMovieNow}`)
    }

  return (
  <>
    <div className="movie-loader-bg">
        <div className="movie-loader"></div>
        <p style={{color:'white', fontWeight:'100'}}>Loading..</p>
      </div>
  
    <div style={{backgroundColor: 'rgb(45, 54, 74)', minHeight:'100vh', width:'100%'}}>
        <MovieNavbar/>

        <div className="movie-search-content">
            <h1>Search Results for "{id}"</h1>
            <div className="searchRes">
                
                {filteredMovies.length > 0 ?(
                     filteredMovies.map((m, key) => {
                        return(
                            <div key={key} id={m.id} className='search-movie-item' onClick={displaySelectedMovie}>
                                <img className='search-thumbnail' src={m["Poster"]} alt="" />
                                <p className='search-m-title'>{m["Title"]}</p>
                            </div>
                        )
                    })
                ): (
                    <div>
                        <h2 style={{color:'#c74e4e', fontWeight:'100'}}>Oops! No results found. Try different keywords.</h2>
                        {/* <button>Explore Movies</button> */}
                    </div>
                )
               }
            </div>
        </div>
        
    </div>
</>
  )
}

export default MovieSearch