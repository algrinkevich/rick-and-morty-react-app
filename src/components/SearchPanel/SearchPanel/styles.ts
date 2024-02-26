import styled from "styled-components";

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  margin: 2rem auto 0 auto;
`;
export const SelectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.8rem;

  @media (max-width: 639px) {
    width: 90%;
  }
`;
