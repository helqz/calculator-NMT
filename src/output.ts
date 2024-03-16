import { Choice } from './choice';

export class Output {
  static display() {
    console.log('\n--Menu--\n');
    console.log('1. Calculator');
    console.log('2. Raise To Power\n');
    console.log('Algebra');
    console.log(' 3. Combinatorics');
    console.log(' 4. Quadratic Equation');
    console.log(' 5. Logarithm');
    console.log(' 6. Progression\n');
    console.log('Geometry');
    console.log(' 7. Area & Perimeter');
    console.log(' 8. Volume & Surface Area');
    console.log(' 9. Trigonometry\n');
  }

  static choice(n: string) {
    console.log();
    switch (n) {
      case '1':
        Choice.calculator();
        break;

      case '2':
        Choice.raiseToPower();
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

      case '6':
        Choice.progression();
        break;

      case 'node':
        Choice.node();
        break;

      default:
        break;
    }
  }
}
