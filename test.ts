class Operation {
  getResult(numberA: number, numberB: number, operate: string) {
    let result = 0;
    switch (operate) {
      case "+":
        result = numberA + numberB;
        break;
      case "-":
        result = numberA - numberB;
        break;
      case "*":
        result = numberA * numberB;
        break;
      case "/":
        result = numberA / numberB;
        break;
    }
    return result;
  }
}
