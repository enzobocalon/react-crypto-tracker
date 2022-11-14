import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;

  .page-container{
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1400px;
    width: 100%;
    list-style: none;
    margin: 10px 0;
  }

  .page-link{
    margin: 1rem;
    cursor: pointer;
  }
  `

export const Wrapper = styled.section`
  width: 100%;
  overflow-x: auto;
`