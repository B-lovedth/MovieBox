import { useParams } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
// import { motion } from "framer-motion";
import { useFetch } from "../Hooks/useFetch";
import Loading from "../components/Loading";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

const Searched = () => {
  const [found, setFound] = useState(true);
  const [itemNum, setItemNum] = useState(12);
  let { title } = useParams();

  const url = `https://api.themoviedb.org/3/search/movie?query=${title}&api_key=${
    import.meta.env.VITE_API_KEY
  }`;
  const { data: searchData, isLoading, isError, error } = useFetch(url);
  console.log(searchData, isLoading, isError);
  const searchResult = searchData && searchData.results;
  console.log(title, url);

  const HandleClick = () => {
    if (itemNum < 30) {
      setItemNum(itemNum + 4);
    }
  };

  if (searchData && searchData.total_results === 0) {
    setFound(false);
  }
  return (
    <>
      <NavBar mode="dark" />
      <div style={{ padding: "5rem 0" }}>
        <h5
          style={{
            textAlign: "center",
            marginTop: "1rem",
            fontSize: "2rem",
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
        {error && <h3>{error.message}</h3>}
        {isLoading && (
          <h3>
            <Loading />
          </h3>
        )}
        <Container>
          {searchResult && (
            <div className="movie-grid">
              {searchResult?.map((movie, key) => {
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
          )}
          {!found && (
            <h3 style={{ textAlign: "center", marginTop: "1rem" }}>
              No results found
            </h3>
          )}
        </Container>
        {searchResult && (
          <div
            style={{ position: "relative", margin: "3rem 0", bottom: "12px" }}
          >
            <MoreBtn onClick={HandleClick}>More</MoreBtn>
          </div>
        )}
      </div>
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
const MoreBtn = styled.button`
  padding: 0.5rem 1rem;
  display: flex;
  margin: 1rem auto 1rem;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  background: linear-gradient(to right, #f66117, #ef5454);
`;

export default Searched;
