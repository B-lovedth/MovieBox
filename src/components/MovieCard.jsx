import { FaHeart } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { tomato, imdb } from "../assets";

const MovieCard = ({...movieProps}) => {
  return (
    <Movie to={`/movies/${movieProps.id}`} data-testid="movie-card">
      <div className="movie-poster">
        <img data-testid="movie-poster" src={movieProps.poster_path!==null?`https://image.tmdb.org/t/p/w500/${movieProps.poster_path}`:"https://picsum.photos/700/500?random=2"} alt="" />
        <div className="top-extra">
          <span>HD</span>
          <span>
            <FaHeart />
          </span>
        </div>
      </div>
      <div className="location-date">
        <span>USA</span>
        <span>{" "}</span>
        <span data-testid="movie-release-date">{movieProps.release_date}</span>
      </div>
      <div className="movie-details">
        <h3 data-testid="movie-title">{movieProps.title}</h3>
        <div className="rating">
          <span>
            <img style={{ width: "30px" }} src={imdb} alt="imdb" />{" "}
            <small>{Math.round(movieProps?.vote_average * 10)}.0/100</small>
          </span>
          <span>
            <img style={{ width: "15px" }} src={tomato} alt="rotten tomato" />
            <small>{Math.round(movieProps?.vote_average * 10)}%</small>
          </span>
        </div>
        <div className="genre">Action,Adventure</div>
      </div>
    </Movie>
  );
};
const Movie = styled(Link)`
  /* max-width: 200px; */
  display: block;
  text-decoration: none;
  color:#101010;
  border-radius:15px;
  padding:0.5rem;
  transition: 0.3s ease-in-out;
  &:hover{
    color:#101010 !important;
    box-shadow: 0 0 30px 0 #1010103b;
  }
  .movie-poster {
    position: relative;
    img {
      width: 100%;
      height: 20rem;
    }
    .top-extra {
      position: absolute;
      width: 100%;
      padding: 10px;
      top: 0;
      left: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 5px;
      span:first-child {
        padding: 5px;
        background: #7d7e8a8a;
        border-radius: 10px;
        font-weight: 600;
        font-size: 0.8rem;
      }
      span:last-child {
        background: #7d7e8a8a;
        border-radius: 50%;
        height: 1.7rem;
        width: 1.7rem;
        font-size: 0.7rem;
        color: #d1d5dc;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .location-date {
    display: flex;
    align-items: center;
    gap: 2px;
    margin: 10px 0;
    span {
      font-size: 0.75rem;
      opacity: 0.5;
      font-weight: 600;
    }
  }
  .movie-details {
    h3 {
      font-size: 1rem;
      font-weight: 600;
    }
    .rating {
      display: flex;
      justify-content: space-between;
      span {
        display: flex;
        gap: 5px;
        align-items: center;
        font-size: 0.75rem;
        font-weight: 500;
        opacity: 0.8;
      }
    }
  }
  .genre {
    font-size: 0.75rem;
    opacity: 0.5;
    font-weight: 600;
    margin-top: 5px;
  }
  @media screen and (max-width:780px){
    .movie-poster{
      img{
        height: 15rem;
      }
    }
  }
`;
export default MovieCard;
