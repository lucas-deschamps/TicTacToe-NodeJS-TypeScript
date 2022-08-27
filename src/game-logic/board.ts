const gameGridInit = (size: number): string[][] => 
  Array.from(Array(size), () => new Array(size).fill(''));

const adversaryPos = (size: number): number[] => [ 
  ~~(Math.random() * gameGridInit(size).length), 
  ~~(Math.random() * gameGridInit(size).length) 
];

export { gameGridInit, adversaryPos };
