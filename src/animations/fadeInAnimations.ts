const GSAPFadeInAnimationToValues = () => {
 return {
  autoAlpha: 1,
  opacity: 1,
  x: 0,
 }
}

const GSAPFadeInAnimationFromValues = ( horizontalTranslateValue: number, ) => {
 return {
  autoAlpha: 0,
  duration: 2,
  opacity: 0,
  x: horizontalTranslateValue,
 }
}

export { GSAPFadeInAnimationToValues, GSAPFadeInAnimationFromValues, }
