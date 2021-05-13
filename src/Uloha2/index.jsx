import React from 'react';
import hradUrl from './hrad.svg';

// Zadání: Po najetí myši, `onMouseEnter` na obrázek zobraz bublinu s textem „Na hradě je myš!“

export const Uloha2 = () => {
  return (
    <img
      onMouseEnter={() => {
        alert('Na hrade je mys!');
      }}
      src={hradUrl}
      width={60}
      height={60}
      alt="hrad"
    />
  );
};
