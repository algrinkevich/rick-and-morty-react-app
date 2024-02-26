import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";

import { Borders, Palette } from "../style-variables";
import Loader from "./Loader";
import Episode from "./Episode";
import { CharacterDetaledInfo } from "../types";

interface CharacterInfoPopupProps {
  onClose: () => void;
  id: number;
}

const Modal = styled.div`
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

const InfoContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  @media (max-width: 767px) {
    overflow-y: visible;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const Details = styled.div`
  padding-block: 1rem;
  & span {
    font-weight: 700;
  }
  & p {
    margin: 0 0 0.5rem 0;
  }
`;

const EpisodesContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const EpisodesTitle = styled.h2`
  margin: 0;
  text-align: center;
`;

const EpisodesBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-y: auto;
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: #000000c0;
  z-index: 2;
`;

const PopupLoader = styled(Loader)`
  width: 200px;
  height: 200px;
  margin: auto auto;
`;

const CloseButton = styled.button`
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

const CharacterInfoPopup = ({ onClose, id }: CharacterInfoPopupProps) => {
  const { status, data } = useQuery<CharacterDetaledInfo>({
    queryKey: ["characterInfo", id],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`,
      );
      return data;
    },
  });

  return (
    <>
      <Overlay onClick={onClose} />
      <Modal>
        {status === "pending" ? (
          <PopupLoader />
        ) : status === "error" ? (
          <p>{"Oops, cannot retrive data :( Please try again"}</p>
        ) : (
          <>
            <InfoContainer>
              <Image src={data.image} key={data.image} />
              <Details>
                <p>
                  <span>Name: </span>
                  {data.name}
                </p>
                <p>
                  <span>Status: </span>
                  {data.status}
                </p>
                <p>
                  <span>Species: </span>
                  {data.species}
                </p>
                <p>
                  <span>Type: </span>
                  {data.type}
                </p>
                <p>
                  <span>Gender: </span>
                  {data.gender}
                </p>
                <p>
                  <span>Origin: </span>
                  {data.origin.name}
                </p>
                <p>
                  <span>Location: </span>
                  {data.location.name}
                </p>
              </Details>
            </InfoContainer>
            <EpisodesContainer>
              <EpisodesTitle>Episodes</EpisodesTitle>
              <EpisodesBlock>
                {data.episode.map((url) => (
                  <Episode url={url} key={url} />
                ))}
              </EpisodesBlock>
            </EpisodesContainer>
          </>
        )}
        <CloseButton
          onClick={onClose}
          className="fa-solid fa-xmark"
        ></CloseButton>
      </Modal>
    </>
  );
};

export default CharacterInfoPopup;
