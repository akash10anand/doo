import { Dimensions } from 'react-native';

export const shadowGenerator = (elevation) => {
  return {
    elevation,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0.5 * elevation },
    shadowOpacity: 0.3,
    shadowRadius: 0.8 * elevation,
  };
};

export const dimentions = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
};
