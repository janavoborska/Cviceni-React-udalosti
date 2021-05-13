import React from 'react';

// Zadání: Po kliku na tlačítko zobraz bublinu s textem „Ahoj“.

export const Uloha1 = () => (
  <button
    onClick={() => {
      alert('ahoj');
    }}
  >
    Ukaž bublinu
  </button>
);
