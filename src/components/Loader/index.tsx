import SpinnerImage from "../../assets/spinner.png";
import { LoaderWrapper } from "./styles";

const Loader = ({ className }: { className?: string }) => {
  return <LoaderWrapper className={className} src={SpinnerImage} />;
};

export default Loader;
