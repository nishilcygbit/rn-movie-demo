import { Platform } from 'react-native';
// import { FontMakerOptions } from '../interface';

export interface FontMakerOptions {
  family: string;
  weight: string;
  style?: string | null;
}

const font: any = {
  Poppins: {
    weights: {
      Thin: '100',
      Light: '300',
      Regular: '400',
      // Medium500: '500', 
      Medium: '600',
      Bold: '700',
      Black: '900',
    },
    styles: {
      Italic: 'italic',
    },
  },
};

// generate styles for a font with given weight and style
const fontMaker = (options: FontMakerOptions) => {
  if (options && options.family && options.weight) {
    let { weight, style } = { ...options };
    const { family } = { ...options };
    const { weights, styles } = font[family];
    let suffix: string = '';

    if (Platform.OS === 'android') {
      weight = weights[weight] ? weight : '';
      if (style) {
        style = styles[style] ? style : '';
        suffix = weight + style;
      } else {
        suffix = weight;
      }


      console.log('[FONTMAKER font]', family + (suffix.length ? `-${suffix}` : '-Regular'));

      return {
        fontFamily: family + (suffix.length ? `-${suffix}` : ''),
      };
    }
    weight = weights[weight] ? weight : '';
    if (style) {
      style = styles[style] ? style : '';
      suffix = weight + style;
    } else {
      suffix = weight;
    }
    console.log('[FONTMAKER font]', family + (suffix.length ? `-${suffix}` : '-Regular'));

    return {
      fontFamily: family + (suffix.length ? `-${suffix}` : '-Regular'),
    };
  }
};

export default fontMaker;
