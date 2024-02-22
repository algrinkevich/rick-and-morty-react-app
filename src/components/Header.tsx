import styled from "styled-components";

const HeaderContainer = styled.header`
  padding: 2rem;
`;

const Logo = styled.img`
  width: 20vw;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src="/src/assets/logo.svg" />
    </HeaderContainer>
  );
};

export default Header;
