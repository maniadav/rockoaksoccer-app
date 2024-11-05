import React from 'react';
import Svg, { Path, ClipPath, Defs, Rect } from 'react-native-svg';

const BackSVG = ({ width = '30', height = '30' }: any) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 30 30" fill="none">
      <Defs>
        <ClipPath id="clip0_7_999">
          <Rect width="30" height="30" fill="white" />
        </ClipPath>
      </Defs>
      <Path
        d="M12.5 27.5L0 15L12.5 2.5L14.7188 4.71875L4.4375 15L14.7188 25.2813L12.5 27.5Z"
        fill="black"
        clipPath="url(#clip0_7_999)"
      />
    </Svg>
  );
};

export default BackSVG;
