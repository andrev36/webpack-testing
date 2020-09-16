import React, { forwardRef, useEffect, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { gsap } from 'gsap';

interface Props {
 isVisible: boolean;
 children: JSX.Element;
 side: string;
 ref: any;
}

const FadeInSide = ({ isVisible, children, side, ref }: Props) => {
 let translateValue = 0;
 switch (side) {
  case 'leftSide':
   translateValue = -100;
   break;
  default:
   translateValue = 100;
   break;
 }
 const translateAnimation = isVisible
  ? gsap.from(ref?.current, {
     duration: 2,
     x: translateValue,
     opacity: 0
    })
  : null;
 useEffect(() => {
  translateAnimation;
 }, []);
 return <div ref={ref}>{children}</div>;
};

export const FadeInContainerAnimation = ({ children, side, ref }: any) => {
 const [isVisible, setVisibility] = useState(false);
 const onChange = (visiblity: any) => {
  visiblity && setVisibility(visiblity);
 };
 return (
  <VisibilitySensor onChange={onChange}>
   <FadeInSide isVisible={isVisible} side={side} ref={ref}>
    {children}
   </FadeInSide>
  </VisibilitySensor>
 );
};
