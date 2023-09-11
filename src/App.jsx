import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
import './App.css'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Searched from './pages/Searched'

function App() {
  const queryClient = new QueryClient(
    {
      defaultOptions:{
        queries:{
          refetchOnWindowFocus:false
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
          <Route path='/movies/:id'/>
        </Route>
     </Routes>
    </Router>
    </QueryClientProvider>
  )
}

export default App
