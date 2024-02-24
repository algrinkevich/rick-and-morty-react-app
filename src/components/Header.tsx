import styled from "styled-components";

const HeaderContainer = styled.header`
  padding: 2rem;
`;

const Logo = styled.img`
  min-width: 300px;
  width: 20vw;

  @media (max-width: 767px) {
    display: block;
    margin: 0 auto;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src="/src/assets/logo.svg" />
    </HeaderContainer>
  );
};

export default Header;
