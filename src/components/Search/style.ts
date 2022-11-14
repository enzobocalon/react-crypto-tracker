import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 768px;
  margin-top: 1rem;
  padding: 10px;
  background: #262629;
  display: flex;
  align-items: center;
  border-radius: 8px;

  &:focus-within {
    outline: 2px solid white;
  }
`

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  margin-left: 10px;
  border: none;
  background: inherit;
  color: white;
  outline: none;
  font-size: 1.2rem;
  font-family: 'Roboto', sans-serif;
`