import styled from "styled-components"
import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import {  useState } from "react"
import { layoutContext } from "../components/Context"

const Layout = () => {
  const [sidebar, setSidebar] = useState(false)
  return (
    <layoutContext.Provider value={{sidebar,setSidebar}}>
    <Container>
        <Sidebar />
        <Outlet />
    </Container>
    </layoutContext.Provider>
  )
}
const Container = styled.div`
  display:grid;
  grid-template-columns: 15% 85%;
  @media (max-width: 768px) {
    font-size: 70%;
    grid-template-columns: 100%;
  }
`
export default Layout