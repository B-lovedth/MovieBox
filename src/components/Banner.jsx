import { useFetch } from "../Hooks/useFetch"
import {AiFillPlayCircle} from "react-icons/ai"
import styled from "styled-components"
import { tomato,imdb } from "../assets"
const Banner = () => {
    const key = import.meta.env.VITE_API_KEY
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`
    const {data} = useFetch(url)
    const movie = data?.results[Math.floor(Math.random()*data?.results.length)]
    console.log(movie)
  return (
    <Container>
      <img className="banner_img" src={`https://image.tmdb.org/t/p/w1280/${movie?.backdrop_path}`} alt="rr" />
      <div className="banner-details">
        <h1>{movie?.title}</h1>
        <div className="rating">
          <span><img style={{width:"30px"}} src={imdb} alt="imdb" /> <small>{Math.floor(movie?.vote_average)*10}.0/100</small></span>
          <span><img style={{width:"15px"}} src={tomato} alt="rotten tomato" /><small>{Math.floor(movie?.vote_average)*10}%</small></span>
        </div>
        <p>{movie?.overview}</p>
        <button><AiFillPlayCircle/> WATCH TRAILER</button>
      </div>
    </Container>
  )
}
const Container = styled.div`
    height: 100vh;
    width: 100%;
    background: #0000004b;
    display: flex;
    padding: 0 10%;
    position: relative;
    align-items: center;
.banner_img{
  position: absolute;
    inset: 0;
    object-fit: cover;
    height: 100%;
    width: 100%;
    z-index: -1;
    opacity:0.8;
}
.banner-details{
  color:white;
  width:60%;
  h1{
    font-size:2.5rem;
  }
  .rating{
    display:flex;
    gap:25px;
    width:20%;
    margin:1rem 0;
    span{
      display:flex;
      align-items:center;
      gap:10px;
      small{
        font-size:0.8rem;
      }
    }
  }
  p{
    font-size:0.9rem;
    width:50%;
    margin-bottom:1rem;
  }
  button{
    padding: .5rem 1rem;
    font-size: 1rem;
    font-weight: 500;
    gap:10px;
    border: none;
    border-radius: 10px;
    background: #be113c;
    color: white;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover{
      background:rgb(255, 165, 0);
    }
  }

}
@media screen and (max-width:780px){
    .banner-details{
      width:100%;
      h1{
        font-size:2rem;
      }
      .rating{
        width:50%;
        span{
          small{
            font-size:0.7rem;
          }
        }
      }
      p{
        font-size:0.8rem;
        width:100%;
      }
      button{
        font-size: 0.8rem;
        padding: .3rem .5rem;
      }
    }
  }
`
export default Banner