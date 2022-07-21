import React from 'react';
import { Image } from 'react-native';
import Styles from '../theme/Styles';

const BASE_URL = 'https://image.tmdb.org/t/p/original';

const ImageWrapper = ({ url, styles }: any) => {
  return !!url ? (
    <Image source={{ uri: `${BASE_URL}${url}` }} style={[!!styles && [...styles]]} />
  ) : null;
};
export default ImageWrapper;
