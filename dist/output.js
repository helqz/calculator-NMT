"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Output = void 0;
const choice_1 = require("./choice");
class Output {
    static display() {
        console.log('\n--Menu--\n');
        console.log('1. Calculator');
        console.log('2. Basic operations \n');
        console.log('Algebra');
        console.log(' 3. Combinatorics');
        console.log(' 4. Quadratic Equation');
        console.log(' 5. Logarithm \n');
        console.log('Geometria');
        console.log(' 6. ');
        console.log(' 7. ');
        console.log(' 8. ');
        console.log();
    }
    static choice(n) {
        console.log();
        switch (n) {
            case '1':
                choice_1.Choice.calculator();
                break;
            case '3':
                choice_1.Choice.combinatorics();
                break;
            case '4':
                choice_1.Choice.quadratic();
                break;
            case '5':
                choice_1.Choice.log();
                break;
            case 'node':
                choice_1.Choice.node();
                break;
        }
    }
}
exports.Output = Output;
