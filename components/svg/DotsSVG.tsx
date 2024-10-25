import * as React from 'react';
import Svg, { Path, G, Circle } from 'react-native-svg';

const DotsSVG = (props: any) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={900} height={600} {...props}>
    <Path fill="#001220" d="M0 0h900v600H0z" />
    <G fill="#A7233A">
      <Circle cx={295} cy={431} r={63} />
      <Circle cx={440} cy={488} r={4} />
      <Circle cx={129} cy={223} r={37} />
      <Circle cx={659} cy={588} r={41} />
      <Circle cx={738} cy={436} r={25} />
      <Circle cx={482} cy={13} r={33} />
      <Circle cx={35} cy={76} r={38} />
      <Circle cx={481} cy={274} r={27} />
      <Circle cx={121} cy={520} r={18} />
      <Circle cx={729} cy={77} r={37} />
      <Circle cx={596} cy={178} r={9} />
      <Circle cx={288} cy={5} r={32} />
      <Circle cx={180} cy={106} r={9} />
      <Circle cx={811} cy={288} r={48} />
      <Circle cx={158} cy={380} r={13} />
      <Circle cx={402} cy={141} r={58} />
      <Circle cx={3} cy={306} r={25} />
      <Circle cx={601} cy={408} r={7} />
      <Circle cx={840} cy={591} r={40} />
      <Circle cx={850} cy={132} r={38} />
    </G>
  </Svg>
);
export default DotsSVG;
