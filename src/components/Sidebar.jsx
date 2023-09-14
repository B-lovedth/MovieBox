import { tv } from "../assets";
import { GoHome } from "react-icons/go";
import { BiCameraMovie } from "react-icons/bi";
import { PiMonitorPlay } from "react-icons/pi";
import { BsNewspaper } from "react-icons/bs";
import { TbLogout } from "react-icons/tb";
import styled from "styled-components";
const Sidebar = () => {
  return (
    <SideBar>
      <a className="top" href="#home">
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
          <TbLogout/>
          <span>Log out</span>
        </a>
      </div>
    </SideBar>
  );
};

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
      &:hover , &.active{
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
        font-size:0.7rem;
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
`;
export default Sidebar;
