import { question } from 'readline-sync';
import { math } from './math';
import { Logic } from './choiceLogic';

export class Choice {
  static calculator() {
    let input: string;

    console.log('Mathematic expression \n');

    while (true) {
      input = question(': ');
      if (input === 'r') return;

      Logic.calculatorLogic(input);
    }
  }

  static combinatorics() {
    const func: string = question('A, C or P? ').toLowerCase();
    console.log();

    let input: string;

    switch (func) {
      case 'a':
      case 'c':
        console.log('n: setSize, k: subsetSize \n');

        while (true) {
          input = question('n, k: ');
          if (input === 'r') return;

          Logic.combinatoricsLogic(func, input);
        }

      case 'p':
        console.log('n: setSize \n');

        while (true) {
          input = question('n: ');
          if (input === 'r') return;

          console.log(math.factorial(Number(input)));
        }

      default:
        return;
    }
  }

  static quadratic() {
    let input: string;

    console.log('ax^2+bx+c \n');

    while (true) {
      input = question('a, b, c: ');
      if (input === 'r') return;

      Logic.quadraticLogic(input);
    }
  }

  static log() {
    let input: string;

    console.log('a: base, b: number \n');

    while (true) {
      input = question('a, b: ');
      if (input === 'r') return;

      Logic.logLogic(input);
    }
  }

  static node() {
    let input: string;

    console.log('Welcome to Node.js. \n');

    while (true) {
      input = question('> ');
      if (input === 'r') return;

      Logic.nodeLogic(input);
    }
  }
}
