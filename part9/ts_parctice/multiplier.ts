const multiplicator = (a: number, b: number, printText) => {
    console.log(printText, a * b)
}

const a: number = Number(process.argv[2])
const b: number = Number(process.argv[3])

multiplicator(a, b, `Multiplied number ${a} and ${b}, the result is:`);