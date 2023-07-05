interface exercisesResultObj {
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number
}


const calculatorExercises = (exercisesList: Array<number>): exercisesResultObj => {
    let exercisesInitialObj = {
       periodLength: 7,
       trainingDays: 0,
       success: false,
       rating: 0,
       ratingDescription: '',
       target: 4,
       average: 0
    }
    const periodLength = exercisesList.length;
    exercisesInitialObj.periodLength = periodLength;

    const trainingDaysList = exercisesList.filter(d => d !== 0);
    const trainingDays = trainingDaysList.length;
    exercisesInitialObj.trainingDays = trainingDays;
    
    if (trainingDays > exercisesInitialObj.target) {
        exercisesInitialObj.success = true
    } else {
        exercisesInitialObj.success = false
    }

    if (exercisesInitialObj.success) {
        exercisesInitialObj.rating = 5;
        exercisesInitialObj.ratingDescription = 'you are good!'
    } else if (trainingDays > 3){
        exercisesInitialObj.rating = 3;
        exercisesInitialObj.ratingDescription = 'not too bad you can do better';
    } else {
        exercisesInitialObj.rating = 0;
        exercisesInitialObj.ratingDescription = 'too bad you need be better';
    }

    exercisesInitialObj.average = trainingDays/periodLength

    return exercisesInitialObj
}

console.log(calculatorExercises([1,2,3,4,0,0,0]))