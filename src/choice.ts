import { question } from 'readline-sync';
import { math } from './math';
import { Logic } from './choiceLogic';

export class Choice {
  private static input: string;

  private static inputReader(ques: string): boolean {
    this.input = question(ques);

    if (this.input === 'r') {
      this.input = '';
      return true;
    }

    return false;
  }

  static calculator() {
    console.log('Mathematic expression\n');

    while (true) {
      if (this.inputReader(': ')) return;

      Logic.calculatorLogic(this.input);
    }
  }

  static raiseToPower() {
    console.log('a^b\n');

    while (true) {
      if (this.inputReader('a, b: ')) return;

      Logic.raiseToPowerLogic(this.input);
    }
  }

  static combinatorics() {
    const func: string = question('A, C or P? ').toLowerCase();

    switch (func) {
      case 'a':
      case 'c':
        console.log('\nn: setSize, k: subsetSize \n');

        while (true) {
          if (this.inputReader('n, k: ')) return;

          Logic.combinatoricsLogic(func, this.input);
        }

      case 'p':
        console.log('n: setSize \n');

        while (true) {
          if (this.inputReader('n: ')) return;

          console.log(`\n ${math.factorial(Number(this.input))} \n`);
        }

      default:
        return;
    }
  }

  static quadratic() {
    console.log('ax^2+bx+c \n');

    while (true) {
      if (this.inputReader('a, b, c: ')) return;

      Logic.quadraticLogic(this.input);
    }
  }

  static log() {
    console.log('a: base, b: number \n');

    while (true) {
      if (this.inputReader('a, b: ')) return;

      Logic.logLogic(this.input);
    }
  }

  static progression() {
    const progres: string = question('Arithmetic or Geometric? [a/g] ');

    switch (progres) {
      case 'a':
        const funcA: string = question('\nN-th element or Area? [n/a] ');

        switch (funcA) {
          case 'n':
            console.log('\na1: firstElement, d: difference, n: elementNumber\n');

            while (true) {
              if (this.inputReader('a1, d, n: ')) return;

              Logic.progressionLogic(progres, this.input);
            }

          case 'a':
            console.log('\na1: firstElement, an: lastElement, n: areaSize\n');

            while (true) {
              if (this.inputReader('a1, an, n: ')) return;

              Logic.progressionAreaLogic(progres, this.input);
            }

          default:
            break;
        }

      case 'g':
        let funcG: string = question('\nN-th element or Area? [n/a] ');

        switch (funcG) {
          case 'n':
            console.log('\nb1: firstElement, q: denominator, n: elementNumber\n');

            while (true) {
              if (this.inputReader('b1, q, n: ')) return;

              Logic.progressionLogic(progres, this.input);
            }

          case 'a':
            console.log('\nb1: firstElement, q: denominator, n: areaSize\n');

            while (true) {
              if (this.inputReader('b1, q, n: ')) return;

              Logic.progressionAreaLogic(progres, this.input);
            }

          default:
            break;
        }

      default:
        return;
    }
  }

  static node() {
    console.log('Welcome to Node.js. \n');

    while (true) {
      if (this.inputReader('> ')) return;

      Logic.nodeLogic(this.input);
    }
  }
}
