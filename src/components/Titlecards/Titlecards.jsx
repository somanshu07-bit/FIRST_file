import React,{useRef,useEffect, useState} from 'react'
import './Titlecards.css'
import cards_data from '../../assets/cards/Cards_data'
import {Link} from 'react-router-dom'
const Titlecards = ({title,category}) => {

  const[apiData,setApiData]=useState([]);
  const cardsRef =useRef(); 
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTg0ZjYyYzM2Yzk4YmRjZGExNGFhYzU0N2IzYzIxMSIsIm5iZiI6MTc3MDc1MTc1OS45MzUwMDAyLCJzdWIiOiI2OThiODcwZjAxYWQxNDEzN2ZjNzIzMjkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.PuG4ti5jgy8On4xGTtQEvpvWoPWCbiolp0mwobZBvVQ'
  }
};



const handlewheel =(event)=>{
  event.preventDefault;
  cardsRef.current.scrollLeft += event.deltaY;
}
useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));



  cardsRef.current.addEventListener('wheel',handlewheel)
},[])
  return (
    <div className='titlecards'>
      <h2>{title ? title:"Popular on Netflix"} </h2>
      <div className='card-list' ref={cardsRef}>
        {
          apiData.map((card,index)=>{
            return <Link to={`/player/${card.id}`} className='cards' key={index}>
              <img src={'https://image.tmdb.org/t/p/w500'+ card.backdrop_path}/>
              <p>{card.original_title}</p>
              </Link>
           })
        }
      </div>
    </div>
  )
}

export default Titlecards
