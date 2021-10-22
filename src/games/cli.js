/* eslint linebreak-style: ["error", "windows"] */
import readlineSync from 'readline-sync';
import askName from '../index.js';

export default () => {
  const name = askName();
};
