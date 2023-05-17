import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../Axios'
import { API_KEY, Img_URL } from '../Constants/Constants'


function Banner() {
    const [movie, setMovie] = useState();


    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then(
            (response) => {
                console.log(response.data)
                const randomIndex = Math.floor(Math.random() * response.data.results.length); 
                setMovie(response.data.results[randomIndex])
            })
    }, [])

    return (
        <div style={{ backgroundImage: `url(${movie ? Img_URL + movie.backdrop_path : ''})` }} className="banner">
            <div className='content'>
                <h1 className='title'>{movie ? movie.title : ''}</h1>
                <div className='banner-buttons'>
                    <button className='button' >Play</button>
                    <button className='button'>More Info</button>
                </div>
                <h1 className='description'>{movie ? movie.overview : ''}</h1>
                
            </div>
            <div className='fade-bottom'></div>

        </div>
    )
}

export default Banner