import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../Axios'
import {Img_URL,API_KEY } from '../../Constants/Constants'
import YouTube from 'react-youtube'

function RowPost(props) {

  const [movies, setMovies] = useState([])
  const [urlId,setUrlId] = useState('')

  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data.results)
      setMovies(response.data.results)
    }).catch((error)=>
    console.log('error')
    )

  }, [])

  const manageMovieClick = (id)=> {
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
      if(response.data.results.length!==0) {
        setUrlId(response.data.results[0])
      }
      else{console.log('Array empty')}
    })
  }

  const opts = {
    height: '390',
    width: '100%' ,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }

  return (
    <div className='row'>
      <h2> {props.title} </h2>
      <div className='posters'>
        {
          movies.map((obj) =>
            <img onClick={ props.isYT ? () => manageMovieClick(obj.id) : null } className={props.isSmall ? 'smallPoster' : 'poster'} src={`${Img_URL}${obj.backdrop_path}`} alt='poster'></img>

          )}



      </div>
      {
        urlId && <YouTube videoId={urlId.key} opts={opts} />
      }
    </div>
  )
}

export default RowPost