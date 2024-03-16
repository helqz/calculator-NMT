import { math } from './math';
import * as calculator from 'mathjs';

export class Logic {
  private static print(value: any) {
    console.log(`\n ${value} \n`);
  }

  static calculatorLogic(input: string) {
    try {
      this.print(calculator.evaluate(input));
    } catch (error: unknown) {
      error instanceof Error
        ? this.print(`Calculation error: ${error.message}`)
        : this.print('Unknown error');
    }
  }

  static combinatoricsLogic(func: string, input: string) {
    const params = input
      .split(' ')
      .map(e => e.split('').filter(e => e !== ','))
      .map(Number);

    switch (func) {
      case 'a':
        this.print(math.A(params[0], params[1]));
        break;

      case 'c':
        this.print(math.C(params[0], params[1]));
        break;

      default:
        return;
    }
  }

  static quadraticLogic(input: string) {
    const params: number[] = input.split(' ').map(Number);

    this.print(math.quadratic(params[0], params[1], params[2]));
  }

  static logLogic(input: string) {
    const params: number[] = input.split(' ').map(Number);

    this.print(math.log(params[0], params[1]));
  }

  static nodeLogic(input: string) {
    return eval(input);
  }
}
