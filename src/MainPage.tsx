import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Buttons } from './Buttons';
import './index.scss';
import { gql, useQuery } from '@apollo/client';

const GET_POSTS = gql`
 query GetPosts {
  posts {
   id
   body
  }
 }
`;

interface Props {}

export const MainPage = () => {
 const { loading, error, data } = useQuery(GET_POSTS);
 if (loading) return 'Loading...';
 if (error) return `Error! ${error.message}`;

 useEffect(() => {}, []);
 return (
  <React.Fragment>
   <h1 className='heading__title'>
    Hello React and Webpack! Using hot reload!
   </h1>
   <section className='container'>
    <Buttons />
    <form className='item'>
     <fieldset>
      <legend>Selecting elements</legend>
      <p>
       <label>Select list</label>
      </p>
      <p>
       <select>
        <option value='1'>one</option>
        <option value='2'>two</option>
        <option value='3'>three</option>
        <option value='4'>four</option>
       </select>
      </p>
     </fieldset>
    </form>
    <div className='item'>
     {/* {data.posts.map((post: any) => {
      return (
       <ul>
        <li>{post.body}</li>
       </ul>
      );
     })} */}
    </div>
    <div className='item'>
     <button>Test Button</button>
    </div>
   </section>
  </React.Fragment>
 );
};
