import styled from "styled-components";
import { Sizes } from "../../style-variables";

export const CardsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, ${Sizes.CardWidth});
  grid-template-rows: auto;
  grid-gap: 2rem;
  margin: 3rem auto 0 auto;
  width: 80%;
  justify-content: center;

  @media (max-width: 768px) {
    width: 90%;
  }
`;
export const ErrorMessage = styled.h2`
  color: #fff;
  min-width: 30%;
  grid-column: span 2;
  text-align: center;
`;
export const InfiniteScrollAnchor = styled.div`
  grid-column-start: 1;
  height: 1px;
`;
