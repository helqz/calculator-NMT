"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.math = void 0;
class math {
    static log(a, b) {
        return Math.round(Math.log(b) / Math.log(a));
    }
    static raiseToPower(a, n) {
        return Math.pow(a, n);
    }
    static module(n) {
        return n >= 0 ? n : -n;
    }
    static factorial(n) {
        return n === 0 ? 1 : n * this.factorial(n - 1);
    }
    static A(n, k) {
        return this.factorial(n) / this.factorial(n - k);
    }
    static C(n, k) {
        return this.factorial(n) / (this.factorial(k) * this.factorial(n - k));
    }
    static quadratic(a, b, c) {
        const D = this.raiseToPower(b, 2) - 4 * a * c;
        if (D > 0) {
            const x1 = (-b - Math.sqrt(D)) / (2 * a);
            const x2 = (-b + Math.sqrt(D)) / (2 * a);
            return [x1, x2];
        }
        else if (D === 0) {
            const x = -b / (2 * a);
            return [x];
        }
        else {
            return null;
        }
    }
}
exports.math = math;
