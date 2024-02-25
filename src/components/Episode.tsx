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
      const response = await fetch(url);
      const data = await response.json();
      return data;
    },
  });

  if (status === "pending") return "Loading...";

  if (status === "error") return "Oops, something went wrong :(";

  return (
    <EpisodeBlock>
      <p>
        {data.episode}: {data.name}
      </p>
      <p>{data.air_date}</p>
    </EpisodeBlock>
  );
};

export default Episode;
