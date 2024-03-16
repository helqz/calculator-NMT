"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Choice = void 0;
const readline_sync_1 = require("readline-sync");
const math_1 = require("./math");
const choiceLogic_1 = require("./choiceLogic");
class Choice {
    static calculator() {
        let input;
        console.log('Mathematic expression \n');
        while (true) {
            input = (0, readline_sync_1.question)(': ');
            if (input === 'r')
                return;
            choiceLogic_1.Logic.calculatorLogic(input);
        }
    }
    static combinatorics() {
        const func = (0, readline_sync_1.question)('A, C or P? ').toLowerCase();
        console.log();
        let input;
        switch (func) {
            case 'a':
            case 'c':
                console.log('n: setSize, k: subsetSize \n');
                while (true) {
                    input = (0, readline_sync_1.question)('n, k: ');
                    if (input === 'r')
                        return;
                    choiceLogic_1.Logic.combinatoricsLogic(func, input);
                }
            case 'p':
                console.log('n: setSize \n');
                while (true) {
                    input = (0, readline_sync_1.question)('n: ');
                    if (input === 'r')
                        return;
                    console.log(math_1.math.factorial(Number(input)));
                }
            default:
                return;
        }
    }
    static quadratic() {
        let input;
        console.log('ax^2+bx+c \n');
        while (true) {
            input = (0, readline_sync_1.question)('a, b, c: ');
            if (input === 'r')
                return;
            choiceLogic_1.Logic.quadraticLogic(input);
        }
    }
    static log() {
        let input;
        console.log('a: base, b: number \n');
        while (true) {
            input = (0, readline_sync_1.question)('a, b: ');
            if (input === 'r')
                return;
            choiceLogic_1.Logic.logLogic(input);
        }
    }
    static node() {
        let input;
        console.log('Welcome to Node.js. \n');
        while (true) {
            input = (0, readline_sync_1.question)('> ');
            if (input === 'r')
                return;
            choiceLogic_1.Logic.nodeLogic(input);
        }
    }
}
exports.Choice = Choice;
