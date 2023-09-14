import styled from 'styled-components'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
const Search = () => {
  const [input, setInput] = useState('')
  const [error , setError] = useState('')
  const navigate = useNavigate()
  const submitHandler = (e) => {
    if (input === "") {
      e.preventDefault();
      setError("No input");
      console.log(input+1)
    }
    else if (!isNaN(input)) { 
      e.preventDefault()
      console.log("a number")
      setError('Invalid input2')
    } else {
      e.preventDefault();
      setError("");
      navigate(`/search/${input}`);
      setInput('')
    } 
  }
  return (
    <Div>
      <StyleForm onSubmit={submitHandler}>
        <Button type='submit'>
          <FaSearch />
        </Button>
        <input
          type='text'
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder='What Do you want to watch'
        />
      </StyleForm>
      <Error>{error}</Error>
    </Div>
  );
}
const Div = styled.div`
  width:80%
`
const Error = styled.h6`
  text-align: center;
  color:red;
  top:0;
  margin-top:5px;
  font-weight:lighter;
`

const StyleForm = styled.form`
  position: relative;
  width: 60%;
  margin:0 auto;
  input {
    width:100%;
    opacity: 0.8;
    background: transparent;
    font-size: 0.9rem;
    font-weight:300;
    color: #fff;
    letter-spacing:0.5px;
    padding: 0.5rem;
    border: 1px solid #fff;
    border-radius: 5px;
    outline: none;
  }
  input::placeholder{
    color:inherit;
  }
  @media (max-width: 1200px) {
    margin: 0 auto;
    width: 100%;
    input {
      width: 100%;
    }
  }
`;
const Button = styled.button`
  position: absolute;
  top: 50%;
  right: 0%;
  background:transparent;
  transform: translate(-20%, -50%);
  border: none;
  cursor:pointer;
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: #fff;
  }
`;
export default Search
