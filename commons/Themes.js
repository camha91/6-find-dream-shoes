import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const SIZES = {
  padding: 10,
  padding12: 12,
  radius: 10,
  width,
  height,
};

export const COLORS = {
  black: '#1E1F20',
  white: '#FFFFFF',

  lightGray: '#F5F5F6',
  lightGray2: '#F6F6F7',
  lightGray3: '#EFEFF1',
  lightGray4: '#F8F8F9',
  transparent: 'transparent',
  darkgray: '#898C95',
};

export const STYLES = {
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
};
