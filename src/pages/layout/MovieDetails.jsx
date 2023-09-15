import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useFetch } from "../../Hooks/useFetch";
import { FaList, FaPlay, FaStar } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { Accordion } from "react-bootstrap";
import Loading from "../../components/Loading";
const MovieDetails = () => {
  const { id } = useParams();
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&append_to_response=images,credits`;
  const { data: movie, isError, isLoading } = useFetch(url);

  console.log(movie);

  return (
    <Container>
      {isLoading && <Loading />}
      {isError && <h1>Failed to load</h1>}
      {movie && (
        <>
          <div className="movie-banner">
            <img
              src={
                movie.backdrop_path !== null
                  ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
                  : `https://image.tmdb.org/t/p/original/${movie.poster_path}`
              }
              alt=""
            />
            <button>
              <span>
                <FaPlay />
              </span>
              <span>Watch Trailer</span>
            </button>
          </div>
          <div className="basic-info">
            <div className="info">
              <span data-testid="movie-title">{movie.title}</span>
              <span className="properties">
                <span>•</span>
                <span data-testid="movie-release-date">{new Date(movie?.release_date).toUTCString()}</span>
                <span>•</span>
                <span>PG-13</span>
                <span>•</span>
                <span data-testid="movie-runtime">{movie.runtime}</span>
              </span>
              <span className="genres">
                {movie.genres?.map((array, key) => {
                  return <small key={key}>{array.name}</small>;
                })}
              </span>
            </div>
            <div className="rating">
              <FaStar />
              <span>{Math.floor(movie?.vote_average) * 10}</span>
              <span>|</span>
              <span>85K</span>
            </div>
          </div>
          <div className="movie-details">
            <div className="left">
              <p className="overview" data-testid="movie-overview">{movie.overview}</p>
              <p>
                Directors :{" "}
                <span className="names">
                  {movie.credits.crew.map((crew, key) => {
                    if (crew.known_for_department === "Directing") {
                      return <span key={key}>{crew.name} , </span>;
                    }
                  })}
                </span>
              </p>
              <p>
                Writers :{" "}
                <span className="names">
                  {movie.credits.crew.map((crew, key) => {
                    if (crew.known_for_department === "Writing") {
                      return <span key={key}>{crew.name} , </span>;
                    }
                  })}
                </span>
              </p>
              <p>
                Stars :{" "}
                <span className="names">
                  {movie.credits.cast.map((cast, key) => {
                    if (key < 5) {
                      return <span key={key}>{cast.name} , </span>;
                    }
                  })}
                </span>
              </p>
              <div className="tab">
                <span className="mytab">
                  Top Rated Movie #{Math.floor(movie.popularity)}
                </span>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Award 9 nominations</Accordion.Header>
                    <Accordion.Body></Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
            <div className="right">
              <div className="top_btns">
                <button>
                  <MdLocalMovies /> See Showtimes
                </button>
                <button>
                  <FaList />
                  More Watch Options
                </button>
              </div>
              <div className="other-movies">
                <div className="posters">
                  {movie.images.posters.map((poster, key) => {
                    if (key < 4) {
                      return (
                        <img
                          key={key}
                          src={`https://image.tmdb.org/t/p/original/${poster.file_path}`}
                          alt=""
                        />
                      );
                    }
                  })}
                </div>
                <div className="bottom">
                  <FaList /> The best movies and shows in september
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  position: relative;
  button{
    &:focus,&:hover{
      outline:none !important;
      border:none !important;
    }
  }
  .movie-banner {
    position: relative;
    height: 23rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 20px;
      object-fit: cover;
      z-index: -1;
      filter: brightness(0.7);
    }
    button {
      display: flex;
      align-items: center;
      flex-direction: column;
      background: transparent;
      gap: 1rem;
      color: #fff;
      span:first-child {
        font-size: 2rem;
        color: #fff;
        height: 4.5rem;
        width: 4.5rem;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: #ffffff2b;
        backdrop-filter: blur(1.5px);
        svg {
          filter: drop-shadow(1px 1px 3px #000);
        }
      }
      span:last-child {
        font-size: 1.5rem;
        font-weight: 400;
        opacity: 0.8;
      }
    }
  }
  .basic-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;
    padding: 0 1rem;
    .info {
      display: flex;
      align-items: center;
      gap: 1rem;
      flex-wrap:wrap;
      span {
        font-weight: 500;
        font-size: 1.25rem;
        color: #363636;
      }
      .properties{
        display:flex;
        gap:1rem;
        span{
          font-size:inherit;
        }
      }
    }
    .genres {
      display: flex;
      align-items: center;
      small {
        color: #be123c;
        padding: 0.3rem 1rem;
        border-radius: 20px;
        border: 1px solid #f5d9df;
        margin-left: 1rem;
        font-size: 0.8rem;
        font-weight: 600;
      }
    }
    .rating {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      svg {
        color: #f5c518;
        font-size: 1.5rem;
      }
      span:first-of-type {
        opacity: 0.4;
      }
    }
  }
  .movie-details {
    display: grid;
    grid-template-columns: 70% 30%;
    grid-gap: 1rem;
    padding: 1rem;
    .left {
      display: grid;
      gap: 1rem;
      p {
        font-weight: 500;
        .names {
          color: #be123c;
        }
      }
      .tab {
        display: flex;
        align-items: center;
        .mytab {
          background: #be123c;
          color: #fff;
          height: 100%;
          padding: 1rem;
          border-radius: 10px;
        }
        .accordion {
          flex-grow: 1;
          button.accordion-button {
            padding: 1rem !important;
          }
        }
      }
    }
    .right {
      display: grid;
      gap: 1rem;
      align-content: space-between;
      .top_btns {
        width: 100%;
        text-align: center;
        > :first-child {
          background: #be123c;
          color: #fff;
          width: 100%;
          border-radius: 10px;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
        }
        > :last-child {
          background: #be123c1c;
          color: #363636;
          width: 100%;
          border-radius: 10px;
          border: 1px solid #be123c;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
        }
      }
      .other-movies {
        max-width: 100%;
        overflow: hidden;
        border-radius: 10px;
        position: relative;
        .posters {
          display: flex;
          justify-content: center;
          gap: 5px;
          img {
            height: 190px;
            width: 120px;
            object-fit: cover;
          }
        }
        .bottom {
          position: absolute;
          left: 0;
          bottom: 0;
          right: 0;
          background: #0000006c;
          color: #eee;
          font-size: 0.8rem;
          padding: 1rem;
          text-align: center;
          display: flex;
          align-items: center;
          gap: 10px;
          backdrop-filter: blur(1.5px);
        }
      }
    }
  }
  @media (max-width: 768px) {
    padding: 5rem 10px 1rem; 
    .movie-banner {
      height: 13rem;
    }
    .movie-details {
      grid-template-columns: 100%;
      gap:3rem;
      .left {
        grid-template-columns: 100%;
        .tab {
          display: flex;
          align-items: stretch;
          flex-direction: column;
          gap: 1rem;
        }
      }
      .right {
        grid-template-columns: 100%;
      }
    }
    .basic-info {
      flex-direction: column;
      gap: 1rem;
      .genres {
        font-size: 0.7rem;
        display: grid;
        gap: 0.5rem;
        grid-template-columns: repeat(2, 1fr);
        justify-items: stretch;
        text-align: center;
        small {
          margin-left: 0;
        }
      }
      .info {
        display: grid;
        grid-template-columns: 1fr;
        .properties {
          text-align: center;
          display: flex;
          justify-content: space-between;
          :first-child {
            display: none;
          }
        }
        span {
          font-size: 0.8rem;
          &:first-child{
            font-size: 1rem;
          }
        }
      }
    }
  }
`;
export default MovieDetails;
