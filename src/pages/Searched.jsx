import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useFetch } from "../Hooks/useFetch";
import Loading from "../components/Loading";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

const Searched = () => {
  let { title } = useParams();

  const url = `https://api.themoviedb.org/3/search/movie?query=${title}&api_key=${
    import.meta.env.VITE_API_KEY
  }`;
  const { data: searchData, isLoading, isError,error } = useFetch(url);
  console.log(searchData, isLoading, isError);
  const searchResult = searchData && searchData.results;
  console.log(title, url);

  if (searchData && searchData.total_results === 0) {
   return( <>
      <NavBar mode="dark" />
      <div style={{ padding: "5rem 0" }}>
        <h5
          style={{
            textAlign: "center",
            marginTop: "1rem",
            fontSize: "1.5rem",
            fontWeight: "700",
          }}
        >
          You searched for {title}
        </h5>
        {searchResult && (
          <h6 style={{ textAlign: "center", color: "grey" }}>
            total search results: {searchData.total_results}
          </h6>
        )}
        <h1 style={{ textAlign: "center", color: "grey" }} >No results Found </h1>
      </div>
    </>)
  }
  else {
    return (
    <>
      <NavBar mode="dark" />
      <div style={{ padding: "5rem 0" }}>
        <h5
          style={{
            textAlign: "center",
            marginTop: "1rem",
            fontSize: "1.5rem",
            fontWeight: "700",
          }}
        >
          You searched for {title}
        </h5>
        {searchResult && (
          <h6 style={{ textAlign: "center", color: "grey" }}>
            total search results: {searchData.total_results}
          </h6>
        )}
        {isError && <h3>{error.message}</h3>}
        {isLoading && (
          <h3>
            <Loading />
          </h3>
        )}
        <Container>
          <div className="movie-grid">
            {searchResult &&
              searchResult.map((movie, key) => {
                const movieProps = {
                  id: movie.id,
                  poster_path: movie.poster_path,
                  release_date: movie.release_date,
                  title: movie.title,
                  vote_average: movie.vote_average,
                };
                return <MovieCard key={key} {...movieProps} />;
              })}
          </div>         
        </Container>
      </div>
    </>
  );}
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
  @media screen and (max-width: 780px) {
    padding: 5%;
    .movie-grid {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 0rem;
    }
  
  }
`;


export default Searched;
