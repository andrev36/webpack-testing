import { useEffect, useState } from 'react';

const VisibilityAnimationHook = ({ animation }: any) => {
 const [isVisible, setVisibility] = useState(false);
 const onChange = (visibility: boolean) => {
  visibility && setVisibility(visibility);
 };
 useEffect(() => {
  try {
   isVisible ? animation : null;
  } catch (err) {}
 }, [isVisible]);
 return { onChange };
};

export { VisibilityAnimationHook };
