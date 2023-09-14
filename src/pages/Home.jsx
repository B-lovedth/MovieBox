import Banner from "../components/Banner"
import MovieList from "../components/MovieList"
import NavBar from "../components/NavBar"

const Home = () => {
  return (
    <>
        <NavBar mode="transparent"/>
        <Banner/>
        <MovieList/>
    </>
  )
}

export default Home