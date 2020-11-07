import { gsap } from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import {
 GSAPFadeInAnimationFromValues,
 GSAPFadeInAnimationToValues
} from '../../animations/fadeInAnimations';
import { VisibilityAnimationHook } from '../../animations/VisibilityAnimationHook';
import '../../index.scss';
const GlobeIcon = require('../../assets/images/globe.svg').default;

interface Props {
 name?: string;
 code?: string;
}

export const queryFetch = (query: string) =>
 fetch('https://countries.trevorblades.com/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
   query
  })
 })
  .then((res) => res.json())
  .catch((err) => console.log(err));

export const FetchComponent = () => {
 const [continents, setContinent] = useState([]);
 const containerRef = useRef(null);

 const fadeInFromRightSideAnimation = gsap.fromTo(
  containerRef.current,
  GSAPFadeInAnimationFromValues(-100),
  GSAPFadeInAnimationToValues()
 );

 const { onChange: onChangeFadeFromRightSide } = VisibilityAnimationHook(
  fadeInFromRightSideAnimation
 );

 useEffect(() => {
  queryFetch(`
  query {
    continents {
      name
      code
    }
  }
`)
   .then((data) => setContinent(data.data.continents))
   .catch((err) => console.log(err));
 }, []);

 return (
  <section className='item fetch-section'>
   <VisibilitySensor onChange={onChangeFadeFromRightSide}>
    <h2 ref={containerRef}>Continent names (Fetched from GraphQL API):</h2>
   </VisibilitySensor>
   <ul data-testid='continents-list' className='fetch-section__continents-list'>
    {continents.length
     ? continents.map((continent: Props, index: number) => {
        return (
         <li key={index}>
          <img
           src={GlobeIcon}
           alt='globe'
           className='fetch-section__globe-svg'
          />
          <span>{continent.name}</span>
         </li>
        );
       })
     : null}
   </ul>
  </section>
 );
};
