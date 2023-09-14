import styled from "styled-components";
import { tv } from "../assets";
const Loading = () => {
  return (
    <LoadingBar className="loading">
      <Span></Span>
      <div className="in-loading">
        <img src={tv} alt="tv" />
        
      </div>
    </LoadingBar>
  );
};
const LoadingBar = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: #333;
  font-size: 1rem !important;
  font-weight: 600;
  .in-loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .in-loading img {
    @keyframes zoom {
    0%{

        transform: scale(.9);
    }
    50% {
      transform: scale(1.5);
    }
    100%{
        transform: scale(.9);

    }
  }
   animation: zoom 2s infinite ease;
  }
`;
const Span = styled.span`
  @keyframes rotate {
    
    0% {
      transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
  }
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 7rem;
  width: 7rem;
  border: 5px solid #be123c;
  border-radius: 50%;
  animation: rotate 2s infinite ease;

  &::before {
    content: "";
    position: absolute;
    left: -10px;
    height: 1rem;
    width: 1rem;
    background-color: #be123c;
    border-radius: 50%;
  }
`;
export default Loading;
