type Operation = 'multiply'|'add'|'divide'|string
type Result = string|number


const calculator = (a: number, b: number, op: Operation): Result => {
    switch (op) {
      case 'multiply':
        return a * b;
      case 'divide':
        if(b===0) throw new Error('Can\' divide by 0!')
        return a / b;
      case 'add':
        return a + b;
      default:
        throw new Error('Operation is not multiply, add, and divide!');
    }
}

const [t, x, numberOne, numberTwo, c ] = process.argv

try {
    console.log(calculator(parseInt(numberOne), parseInt(numberTwo), c));
} catch (error: unknown) {
    let errorMessage = 'Something went wrong.'
    if (error instanceof Error) {
        errorMessage += ' Error:' + error.message;
    }
    console.log(errorMessage)
}
