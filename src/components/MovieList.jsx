import styled from "styled-components";
import { BsChevronRight } from "react-icons/bs";
import { useFetch } from "../Hooks/useFetch";
import MovieCard from "./MovieCard";
import Loading from "./Loading";
const MovieList = () => {
  const key = import.meta.env.VITE_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&append_to_response=genres`;
  const { data, isLoading, isError } = useFetch(url);
  const movies = data?.results;
  //   const topTen= movies?.slice(0,10)
  console.log(movies,isLoading,isError);

  return (
    <>
      <Container>
        <div className="top">
          <h2>Featured Movie</h2>
          <a href="#">
            See more <BsChevronRight />
          </a>
        </div>
        {isLoading && <Loading />}
        {isError && <h1>Failed to fetch</h1>}
        {movies && (
          <div className="movie-grid">
            {movies?.map((movie, key) => {
              const movieProps = {
                id: movie.id,
                poster_path: movie.poster_path,
                release_date: movie.release_date,
                title: movie.title,
                vote_average: movie.vote_average,
              };
              if (key < 11){
              return <MovieCard key={key} {...movieProps} />;}
            })}
          </div>
        )}
      </Container>
    </>
  );
};
const Container = styled.div`
  width: 100%;
  padding: 10%;
  position: relative;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 2rem;
    h2 {
      font-size: 2rem;
    }
    a {
      display: flex;
      align-items: center;
      gap: 5px;
      color: #be123c;
      font-size: 0.9rem;
      text-decoration: none;
    }
  }
  .movie-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 3.5rem;
  }
`;
export default MovieList;
