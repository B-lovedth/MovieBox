import { tv } from "../assets";
import { useContext } from "react";
import { GoHome } from "react-icons/go";
import { BiCameraMovie } from "react-icons/bi";
import { PiMonitorPlay } from "react-icons/pi";
import { BsNewspaper } from "react-icons/bs";
import { TbLogout } from "react-icons/tb";
import styled from "styled-components";
import { layoutContext } from "./Context";
import { FaBars, FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const { sidebar, setSidebar } = useContext(layoutContext);

  return (
    <Container>
      <div className="toggle-btn">
        <button onClick={() => setSidebar(true)}>
          <FaBars />
        </button>
      </div>
      <SideBar className={sidebar ? "open" : ""}>
        <a className="top" href="#home">
          <button onClick={() => setSidebar(false)}>
            <FaTimes />
          </button>
          <img src={tv} alt="logo" />
          <h3>MovieBox</h3>
        </a>
        <div className="middle">
          <a className="link" href="/">
            <GoHome />
            <span>Home</span>
          </a>
          <a className="link active" href="#">
            <BiCameraMovie />
            <span>Movies</span>
          </a>
          <a className="link" href="#">
            <PiMonitorPlay />
            <span>TV Series</span>
          </a>
          <a className="link" href="#">
            <BsNewspaper />
            <span>Upcoming</span>
          </a>
        </div>
        <div className="bottom">
          <div className="box">
            <h4>Play more quizes and earn free tickets</h4>
            <p>50K people are playing now</p>
            <button>Start Playing</button>
          </div>
          <a className="link" href="#">
            <TbLogout />
            <span>Log out</span>
          </a>
        </div>
      </SideBar>
    </Container>
  );
};
const Container = styled.div`
  .toggle-btn {
    display: none;
  }
  @media screen and (max-width: 768px) {
    .toggle-btn {
      display: block;
      position: fixed;
      top: 0px;
      right: 0px;
      left: 0;
      z-index: 980;
      backdrop-filter:blur(10px);
      box-shadow: 0 1px 0.5rem #00000057;
      button {
        background: transparent;
        border: none;
        font-size: 1.5rem;
        position: relative;
        z-index: 999;
        color: #101010;
        cursor: pointer;
        &:focus {
          outline: none;
        }
      }
    }
  }
`;
const SideBar = styled.nav`
  height: 100vh;
  position: sticky;
  top: 0;
  color: #101010;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  border-right: 2px solid #ddd;

  .top {
    display: flex;
    align-items: center;
    gap: 15px;
    text-decoration: none;
    color: inherit;
    position: relative;
    button{
      display:none;
    }
    img {
      width: 40px;
    }
    h3 {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 0 !important;
    }
  }
  .middle {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    .link {
      &:hover,
      &.active {
        opacity: 1;
        border-right: 4px solid #ba0734;
        background: #be123c1c;
        span {
          color: #ba0734;
        }
      }
    }
  }
  .link {
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 1rem 2rem;
    font-weight: 600;
    opacity: 0.5;
    span {
      font-size: 0.9rem !important;
    }
    &:hover {
      opacity: 1;
      span {
        color: darkred;
      }
    }
  }
  .bottom {
    display: flex;
    flex-direction: column;
    width: 80%;
    gap: 10px;
    .box {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 1rem;
      background: #ba07340f;
      border-radius: 10px;
      border: 1px solid #ba0734c0;
      h4 {
        font-size: 0.7rem;
        font-weight: 600;
        color: #656465;
      }
      p {
        font-size: 0.7rem;
        opacity: 0.7;
      }
      button {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 5px;
        color: #ba0734;
        font-size: 0.7rem;
        background-color: #be123c1c;
        font-weight: 600;
        cursor: pointer;
      }
    }
    .link {
      text-decoration: none;
      color: inherit;
      font-weight: 600;
      opacity: 0.5;
      &:hover {
        opacity: 1;
      }
    }
  }
  @media screen and (max-width: 768px) {
    position: fixed;
    left: -100%;
    width: 20rem;
    background-color: #fff;
    z-index: 990;
    &.open {
      left: 0;
    }
    .top {
      align-self: flex-start;
      padding-left: 1rem;
      button {
        display:inline;
        position: absolute;
        right: -160px;
        top: -15px;
        font-size: 1.5rem;
        color: #101010;
        &:focus {
          outline: none;
        }
      }
    }
  }
`;
export default Sidebar;
