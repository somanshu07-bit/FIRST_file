import React, { useEffect } from 'react'
import './Player.css'
 import back from '../../assets/backt.png'
import { useNavigate, useParams } from 'react-router-dom'




const Player=() =>{
  const navigate=useNavigate();
  /*
  const {id}=useParams();
  const[apiData,setApiData]=useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""
  })

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTg0ZjYyYzM2Yzk4YmRjZGExNGFhYzU0N2IzYzIxMSIsIm5iZiI6MTc3MDc1MTc1OS45MzUwMDAyLCJzdWIiOiI2OThiODcwZjAxYWQxNDEzN2ZjNzIzMjkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.PuG4ti5jgy8On4xGTtQEvpvWoPWCbiolp0mwobZBvVQ'
  }
};
useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/$(id)/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));
},[])

fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));
  */
  return (
    <div classname='player'>
      <img className='p-in' src={back} alt="" onClick={()=>{navigate(-1)}}/>
      <iframe className='ig' width='90%' height='90%' src={`https://www.youtube.com/embed/MWOlnZSnXJo`}
      title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className='player-info'>
        
      </div>
    </div>
  )
}

export default Player
