import styled from "styled-components";
import SpinnerImage from "../assets/spinner.png";

const LoaderWrapper = styled.img`
  display: block;
  margin: 0 auto;
  width: clamp(100px, 20vw, 200px);
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = ({ className }: { className?: string }) => {
  return <LoaderWrapper className={className} src={SpinnerImage} />;
};

export default Loader;
