import styled from "styled-components";
import { Borders, Palette } from "../../style-variables";
import Loader from "../Loader";

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: clamp(350px, 70vw, 900px);
  max-height: 90%;
  min-height: 60%;
  border-radius: ${Borders.BasicRadius};
  padding: 2.5rem;
  background-color: ${Palette.SecondaryColor};
  display: flex;
  gap: 3rem;
  color: #fff;
  z-index: 2;

  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
    max-height: 100%;
    border-radius: 0;
    flex-direction: column;
    overflow-y: auto;
  }
`;
export const InfoContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  @media (max-width: 767px) {
    overflow-y: visible;
  }
`;
export const Image = styled.img`
  width: 100%;
`;
export const Details = styled.div`
  padding-block: 1rem;
  & span {
    font-weight: 700;
  }
  & p {
    margin: 0 0 0.5rem 0;
  }
`;
export const EpisodesContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const EpisodesTitle = styled.h2`
  margin: 0;
  text-align: center;
`;
export const EpisodesBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-y: auto;
`;
export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: #000000c0;
  z-index: 2;
`;
export const PopupLoader = styled(Loader)`
  width: 200px;
  height: 200px;
  margin: auto auto;
`;
export const CloseButton = styled.button`
  font-size: 1.4rem;
  position: absolute;
  right: 1.3rem;
  top: 0.9rem;
  color: ${Palette.GreyColor};
  background: none;
  padding: 0;
  border: none;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;
