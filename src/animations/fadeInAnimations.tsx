export const GSAPFadeInAnimationToValues = () => {
 return {
  x: 0,
  autoAlpha: 1,
  opacity: 1
 };
};

export const GSAPFadeInAnimationFromValues = (
 horizontalTranslateValue: number
) => {
 return {
  duration: 2,
  x: horizontalTranslateValue,
  autoAlpha: 0,
  opacity: 0
 };
};
