import 'jest-extended';
import '@testing-library/jest-dom/extend-expect';

declare module '*.png' {
 const value: any;
 export = value;
}
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.webp';
declare module '*.svg';
declare module '*.gif';
