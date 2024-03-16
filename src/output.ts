import { Choice } from './choice';

export class Output {
  static display() {
    console.log('\n--Menu--\n');
    console.log('1. Calculator');
    console.log('2. Basic operations\n');
    console.log('Algebra');
    console.log(' 3. Combinatorics');
    console.log(' 4. Quadratic Equation');
    console.log(' 5. Logarithm\n');
    console.log('Geometry');
    console.log(' 6. ');
    console.log(' 7. ');
    console.log(' 8. ');
    console.log();
  }

  static choice(n: string) {
    console.log();
    switch (n) {
      case '1':
        Choice.calculator();
        break;

      case '3':
        Choice.combinatorics();
        break;

      case '4':
        Choice.quadratic();
        break;

      case '5':
        Choice.log();
        break;

      case 'node':
        Choice.node();
        break;
    }
  }
}
