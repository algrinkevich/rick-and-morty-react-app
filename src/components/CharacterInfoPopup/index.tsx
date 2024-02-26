import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import Episode from "../Episode";
import { CharacterDetaledInfo } from "../../types";
import {
  Overlay,
  Modal,
  PopupLoader,
  InfoContainer,
  Image,
  Details,
  EpisodesContainer,
  EpisodesTitle,
  EpisodesBlock,
  CloseButton,
} from "./styles";

interface CharacterInfoPopupProps {
  onClose: () => void;
  id: number;
}

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
