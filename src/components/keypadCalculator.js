const firstRowbuttons = [
  {
    text: 'AC',
  },
  {
    text: '+/-',
  },
  {
    text: '%',
  },
  {
    text: '÷',
    className: 'bg-orange',
  },
];
const secondRowbuttons = [
  {
    text: '7',
  },
  {
    text: '8',
  },
  {
    text: '9',
  },
  {
    text: 'x',
    className: 'bg-orange',
  },
];
const thirdRowbuttons = [
  {
    text: '4',
  },
  {
    text: '5',
  },
  {
    text: '6',
  },
  {
    text: '-',
    className: 'bg-orange',
  },
];
const fourthRowbuttons = [
  {
    text: '1',
  },
  {
    text: '2',
  },
  {
    text: '3',
  },
  {
    text: '+',
    className: 'bg-orange',
  },
];
const fifthRowbuttons = [
  {
    text: '0',
    className: 'span-2-col',
  },
  {
    text: '.',
  },
  {
    text: '=',
    className: 'bg-orange',
  },
];

const buttons = firstRowbuttons.concat(secondRowbuttons)
  .concat(thirdRowbuttons)
  .concat(fourthRowbuttons)
  .concat(fifthRowbuttons);

export {
  firstRowbuttons,
  secondRowbuttons,
  thirdRowbuttons,
  fourthRowbuttons,
  fifthRowbuttons,
  buttons,
};
