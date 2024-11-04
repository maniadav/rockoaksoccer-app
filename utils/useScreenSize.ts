import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

export default function useScreenSize() {
  const [screenSize, setScreenSize] = useState({
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  });

  useEffect(() => {
    const onChange = ({ window }: any) => {
      setScreenSize({
        width: window.width,
        height: window.height,
      });
    };

    const subscription = Dimensions.addEventListener('change', onChange);

    return () => {
      subscription?.remove();
    };
  }, []);

  return screenSize;
}
