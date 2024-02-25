import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";

interface EpisodeProps {
  url: string;
}

interface EpisodeInfo {
  name: string;
  air_date: string;
  episode: string;
}

const EpisodeBlock = styled.div`
  & p {
    margin: 0;
  }
`;

const Episode = ({ url }: EpisodeProps) => {
  const { status, data } = useQuery<EpisodeInfo>({
    queryKey: ["episodeInfo", url],
    queryFn: async () => {
      const { data } = await axios.get(url);
      return data;
    },
  });

  return (
    <EpisodeBlock>
      {status === "pending" ? (
        <p>Loading...</p>
      ) : status === "error" ? (
        <p>Cannot load episode data</p>
      ) : (
        <>
          <p>
            {data.episode}: {data.name}
          </p>
          <p>{data.air_date}</p>
        </>
      )}
    </EpisodeBlock>
  );
};

export default Episode;
