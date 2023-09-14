import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient,QueryClientProvider } from 'react-query';
import './App.css'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Searched from './pages/Searched'
import MovieDetails from './pages/layout/MovieDetails';

function App() {
  const queryClient = new QueryClient(
    {
      defaultOptions:{
        queries:{
          retry:2,
          refetchOnWindowFocus:false,
          useErrorBoundary: true,
        }
      }
    }
  )
  return (
    <QueryClientProvider client={queryClient}>
    <Router>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/search/:title" element={<Searched/>} />
        <Route path="" element={<Layout/>}>
          <Route  path='/movies/:id' element={<MovieDetails/>}/>
        </Route>
     </Routes>
    </Router>
    </QueryClientProvider>
  )
}

export default App
