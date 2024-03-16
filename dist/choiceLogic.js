"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logic = void 0;
const math_1 = require("./math");
const calculator = __importStar(require("mathjs"));
class Logic {
    static print(value) {
        console.log(`\n ${value} \n`);
    }
    static calculatorLogic(input) {
        try {
            this.print(calculator.evaluate(input));
        }
        catch (error) {
            error instanceof Error
                ? this.print(`Calculation error: ${error.message}`)
                : this.print('Unknown error');
        }
    }
    static combinatoricsLogic(func, input) {
        const params = input
            .split(' ')
            .map(e => e.split('').filter(e => e !== ','))
            .map(Number);
        switch (func) {
            case 'a':
                this.print(math_1.math.A(params[0], params[1]));
                break;
            case 'c':
                this.print(math_1.math.C(params[0], params[1]));
                break;
            default:
                return;
        }
    }
    static quadraticLogic(input) {
        const params = input.split(' ').map(Number);
        this.print(math_1.math.quadratic(params[0], params[1], params[2]));
    }
    static logLogic(input) {
        const params = input.split(' ').map(Number);
        this.print(math_1.math.log(params[0], params[1]));
    }
    static nodeLogic(input) {
        return eval(input);
    }
}
exports.Logic = Logic;
