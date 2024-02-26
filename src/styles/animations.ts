import { keyframes } from "styled-components";
import { Palette } from "./variables";

export const blinkScreenKeyFrameStartEndGradient = `repeating-linear-gradient(
    0deg,
    ${Palette.BasicColor}80,
    ${Palette.DarkGreen}80 1px
);`;

export const blinkScreenKeyFrameMiddleGradient = `repeating-linear-gradient(
    0deg,
    ${Palette.BasicColor}80,
    ${Palette.DarkGreen}80 5px
  );`;

export const blinkScreen = keyframes`
    0%,
    100% {
        background: ${blinkScreenKeyFrameStartEndGradient}
    }
    50% {
        background: ${blinkScreenKeyFrameMiddleGradient}
    }
`;
