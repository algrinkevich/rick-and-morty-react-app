import { HeaderContainer, Logo } from "./styles";
import LogoImg from "../../assets/logo.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={LogoImg} />
    </HeaderContainer>
  );
};

export default Header;
