import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { EpisodeInfo } from "../../types";
import { EpisodeBlock } from "./styles";

interface EpisodeProps {
  url: string;
}

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
