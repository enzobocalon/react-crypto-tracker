import styled from "styled-components";

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 10px 0;
  min-width: 0;
  padding-bottom: 10px;
  border-bottom: 1px solid #2F2E2E;
`

export const Favorite = styled.div`
  cursor: pointer;
`

export const Icon = styled.div`
  flex: 1;
  max-height: 25px;
  max-width: 25px;
  img{
    min-width: 25px;
    min-height: 25px;
    width: 100%;
  }
`

export const Name = styled.div`
  flex: 2 1 200px;
  max-width: 500px;
  min-width: 200px;
` 

export const Price = styled.div`
  flex: 1 1 200px;
  max-width: 200px;
  min-width: 200px;
  justify-self: flex-end;
  text-align: right;
`

export const Variation = styled.div`
  flex: 1 1 50px;
  min-width: 50px;
  max-width: 160px;
  text-align: right;
`