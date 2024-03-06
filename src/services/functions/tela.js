import { Dimensions } from 'react-native';

const screenDimensions = Dimensions.get('window');
export const screenHeight = screenDimensions.height;
export const screenWidth = screenDimensions.width;

const guidelineBaseWidth = screenWidth >= 800 ? screenWidth * 0.55 : 390;
const guidelineBaseHeight = 844;

export function Scale(size) {
    let tamanhoTela = screenWidth > guidelineBaseWidth ? screenWidth / 1.4 : screenWidth;
    let retorno = screenWidth / guidelineBaseWidth * size;
    return (retorno);
};

export function VerticalScale(size) {
    let tamanhoTela = screenHeight > guidelineBaseHeight ? screenHeight / 1.4 : screenHeight;
    let retorno = screenHeight / guidelineBaseHeight * size;
    return (retorno);
}
export const ModerateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

let deviceHeight = Dimensions.get('screen').height;
let windowHeight = Dimensions.get('window').height;
let bottomNavBarHeight = deviceHeight - windowHeight;

export const useGestureNavigation = bottomNavBarHeight == 0 ? true : false;