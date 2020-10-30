import { useEffect, useState } from 'react';

export const VisibilityAnimationHook = ({ animation }: any) => {
 const [isVisible, setVisibility] = useState(false);
 const onChange = (visiblity: boolean) => {
  visiblity && setVisibility(visiblity);
 };
 useEffect(() => {
  try {
   isVisible ? animation : null;
  } catch (err) {}
 }, [isVisible]);
 return { onChange };
};
