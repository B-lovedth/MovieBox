import { Container } from "react-bootstrap"
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

export default Layout