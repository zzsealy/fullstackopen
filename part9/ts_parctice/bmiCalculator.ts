interface MultiplyValues {
    height: number,
    weight: number
}
const parseArgument = (height:number, weight: number): MultiplyValues => {
    if (!isNaN(height) && !isNaN(weight)) {
        return {
            height: height,
            weight: weight
        }
    } else {
        throw new Error('Provided height and weight!')
    }
}

const bmiCalculator = (height: number, weight: number) => {
    const heightMeter = height / 100
    console.log(heightMeter, weight)
    const bmi = weight/(heightMeter * heightMeter)
    console.log(`your bmi is ${bmi}`)
}

try {
    const { height, weight } = parseArgument(190, 100);
    bmiCalculator(height, weight)

} catch (error: unknown) {
    let errorMessage = 'Some bad happened:';
    if (error instanceof Error) {
        errorMessage += errorMessage + error.message;
    }
    console.log(errorMessage)
}

export {
    bmiCalculator
}