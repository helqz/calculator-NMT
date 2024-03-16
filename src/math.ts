export class math {
  static arithProgres(a1: number, d: number, n: number): number {
    return a1 + d * (n - 1);
  }

  static arithProgresArea(a1: number, an: number, n: number): number {
    return ((a1 + an) / 2) * n;
  }

  static geomProgres(b1: number, q: number, n: number): number {
    return b1 * this.raiseToPower(q, n - 1);
  }

  static geomProgresArea(b1: number, q: number, n: number): number {
    return (b1 * (this.raiseToPower(q, n) - 1)) / (q - 1);
  }

  static log(a: number, b: number): number {
    return Math.round(Math.log(b) / Math.log(a));
  }

  static raiseToPower(a: number, n: number): number {
    return Math.pow(a, n);
  }

  static module(n: number): number {
    return n >= 0 ? n : -n;
  }

  static factorial(n: number): number {
    return n === 0 ? 1 : n * this.factorial(n - 1);
  }

  static A(n: number, k: number): number {
    return this.factorial(n) / this.factorial(n - k);
  }

  static C(n: number, k: number): number {
    return this.factorial(n) / (this.factorial(k) * this.factorial(n - k));
  }

  static quadratic(a: number, b: number, c: number): number[] | null {
    const D = this.raiseToPower(b, 2) - 4 * a * c;

    if (D > 0) {
      const x1 = (-b - Math.sqrt(D)) / (2 * a);
      const x2 = (-b + Math.sqrt(D)) / (2 * a);

      return [x1, x2];
    } else if (D === 0) {
      const x = -b / (2 * a);

      return [x];
    } else {
      return null;
    }
  }
}
