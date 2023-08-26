import { ThreeDots } from "react-loader-spinner";
import { StyledOverlay } from "./Loader.styled";

export const Loader = () => {
  return (
    <StyledOverlay>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#ff0b0b"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </StyledOverlay>
  );
};
