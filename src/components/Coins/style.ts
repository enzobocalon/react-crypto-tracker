import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;

  svg{
    cursor: pointer;
  }

  .page-container{
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1400px;
    width: 100%;
    list-style: none;
    margin: 10px 0;
    overflow-y: hidden;
  }

  .page-link{
    cursor: pointer;
    padding: 1rem;
    transition: all .3s ease-in-out;
    
    &:hover{
      color: rgb(56, 97, 251);
    }
  }

  .break {
    align-self: flex-end;
  }

  .break, .previous, .next{
    transition: all .3s ease-in-out;
    
    &:hover{
      color: rgb(56, 97, 251);
    }
  }
  `

export const Wrapper = styled.section`
  width: 100%;
  overflow-x: auto;
`