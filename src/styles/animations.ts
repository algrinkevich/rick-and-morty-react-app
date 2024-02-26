import { keyframes } from "styled-components";
import { Palette } from "./variables";

export const blinkScreen = keyframes`
      0%,
      100% {
        background: repeating-linear-gradient(
          0deg,
          ${Palette.BasicColor}80,
          ${Palette.DarkGreen}80 1px
        );
      }
      50% {
        background: repeating-linear-gradient(
          0deg,
          ${Palette.BasicColor}80,
          ${Palette.DarkGreen}80 5px
        );
      }
`;
