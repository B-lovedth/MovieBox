import styled from "styled-components"
import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"

const Layout = () => {
  return (
    <Container>
        <Sidebar/>
        <Outlet />
    </Container>
  )
}
const Container = styled.div`
  display:grid;
  grid-template-columns: 15% 85%;
  @media (max-width: 768px) {
    grid-template-columns: 100%;
  }
`
export default Layout