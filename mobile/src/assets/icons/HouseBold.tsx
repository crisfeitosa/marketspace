import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const HouseBold = (props: SvgProps) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 6.02597L6.5 14.6591V25.5H11.5V20C11.5 19.337 11.7634 18.7011 12.2322 18.2323C12.7011 17.7634 13.337 17.5 14 17.5H18C18.663 17.5 19.2989 17.7634 19.7678 18.2323C20.2366 18.7011 20.5 19.337 20.5 20V25.5H25.5V14.6591L16 6.02597ZM14.3149 3.5036C14.7755 3.08336 15.3765 2.85034 16 2.85034C16.6235 2.85034 17.2245 3.08336 17.6851 3.5036C17.6859 3.50433 17.6867 3.50506 17.6875 3.5058L27.6838 12.5899L27.7049 12.6095C27.951 12.8419 28.1482 13.1213 28.2847 13.431C28.4212 13.7408 28.4943 14.0748 28.4998 14.4133L28.5 14.4375V26C28.5 26.6631 28.2366 27.2989 27.7678 27.7678C27.2989 28.2366 26.663 28.5 26 28.5H20C19.337 28.5 18.7011 28.2366 18.2322 27.7678C17.7634 27.2989 17.5 26.6631 17.5 26V20.5H14.5V26C14.5 26.6631 14.2366 27.299 13.7678 27.7678C13.2989 28.2366 12.663 28.5 12 28.5H6C5.33696 28.5 4.70108 28.2366 4.23223 27.7678C3.76339 27.299 3.5 26.6631 3.5 26V14.4375L3.5002 14.4133C3.50567 14.0748 3.57882 13.7408 3.71533 13.431C3.85184 13.1213 4.04896 12.8419 4.29508 12.6095L4.3162 12.5899L14.3125 3.5058C14.3133 3.50506 14.3141 3.50433 14.3149 3.5036Z"
    />
  </Svg>
);
export default HouseBold;
