import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const RadioButton = (props: SvgProps) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 256 256"
    {...props}
  >
    <Path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm56-88a56,56,0,1,1-56-56A56.06,56.06,0,0,1,184,128Z" />
  </Svg>
);
export default RadioButton;