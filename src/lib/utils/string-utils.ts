export const concat = (...strings: (string | undefined | boolean)[]) => strings.filter(s => typeof s === 'string').join(' ');

export const Strings = Object.freeze({
  MIDDOT: '·',
});