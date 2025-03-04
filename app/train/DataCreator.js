/*
0 = add
1 = sub
2 = multiplication
3 = square
4 = perfect root
5 = non-perfect-root
*/
class Question {
    constructor(quiz, answer, choices , type) {
        this.question = quiz;
        this.answer = answer;
        this.choices = choices;
        this.type = type;
    }
}

function generateChoices2(correctAnswer, numChoices = 4) {
    let choices = new Set();
    choices.add(correctAnswer);

    while (choices.size < numChoices) {
        let variation = Math.floor(
            correctAnswer * (1 + (Math.random() - 0.5) * 0.4) // ±20% variation
        );

        if (variation !== correctAnswer) {
            choices.add(variation);
        }
    }

    return Array.from(choices).sort(() => Math.random() - 0.5); // Shuffle choices
}

function generateChoices3(correctAnswer, numChoices = 4) {
    let choices = new Set();
    choices.add(correctAnswer.toString());
    let strAnswer = correctAnswer.toString();

    // For single-digit numbers (i.e. numbers that convert to a one-character string)
    if (strAnswer.length < 2) {
        // If the number is less than 6, widen the range to ±2; otherwise, use ±1.
        let range = correctAnswer < 10 ? 2 : 1;
        while (choices.size < numChoices) {
            // Generate a random variation in the range [-range, +range]
            let variation = correctAnswer + (Math.floor(Math.random() * (2 * range + 1)) - range);
            // Ensure the variation is non-negative and not equal to the correct answer
            if (variation !== correctAnswer && variation >= 0) {
                choices.add(variation.toString());
            }
        }
    } else {
        // For numbers with two or more digits, use the original logic.
        while (choices.size < numChoices) {
            let firstDigit = strAnswer[0];
            let lastDigit = strAnswer[strAnswer.length - 1];
            let middlePart = "";
            for (let i = 1; i < strAnswer.length - 1; i++) {
                middlePart += Math.floor(Math.random() * 10);
            }
            let variation = firstDigit + middlePart + lastDigit;
            choices.add(variation);
        }
    }

    // Convert the set back to numbers and shuffle them
    return Array.from(choices).map(Number).sort(() => Math.random() - 0.5);
}

function generateChoices(answer) {
    const answerStr = answer.toString();
    const lastDigit = parseInt(answerStr.slice(-1));
    const isSingleDigit = answerStr.length === 1;
    const choices = new Set();

    // Generate 4 unique wrong answers
    while (choices.size < 3) {
        let candidate;

        if (isSingleDigit) {
            // For single-digit answers, generate both 1-digit and 2-digit numbers
            candidate = Math.random() < 0.3 ?
                lastDigit :  // Keep the original single-digit sometimes
                Math.floor(Math.random() * 90 + 10); // Generate 10-99
        } else {
            // For multi-digit answers, maintain the same number of digits
            const magnitude = Math.pow(10, answerStr.length - 1);
            candidate = Math.floor(Math.random() * (9 * magnitude) + magnitude);
        }

        // Ensure correct ending and exclude correct answer
        if (candidate % 10 === lastDigit && candidate !== answer) {
            choices.add(candidate);
        }
    }

    // Add the correct answer and convert to array
    choices.add(answer);
    return shuffleArray([...choices]);
}

// Helper function to shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}







function Rnd(n, square) {
    if (n <= 0) return 0;
    let min = 10 ** (n - 1); // Smallest n-digit number
    const max = 10 ** n - 1; // Largest n-digit number

    // If square is true and n = 2, ensure min is at least 25
    if (square && n === 2) min = Math.max(min, 25);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}


export function GenerateRandomQuestion(digits1, digits2, operation) {
    let number1 = Rnd(digits1 , operation == 3);
    let number2 = digits2 ? Rnd(digits2 , operation == 3) : 0;


    switch (operation) {
        case 0:
            return new Question(`${number1} + ${number2}`, number1 + number2, generateChoices(number1 + number2) , 0);
        case 1:
            return new Question(`${Math.max(number1 , number2)} - ${Math.min(number1 , number2)}`, Math.max(number1 , number2) - Math.min(number1 , number2), generateChoices(Math.max(number1 , number2) - Math.min(number1 , number2)) , 1);
        case 2:
            return new Question(`${number1} × ${number2}`, number1 * number2, generateChoices(number1 * number2) , 2);
        case 3:
            return new Question(`${number1}²`, number1 * number1, generateChoices(number1 * number1) , 3);
        case 4:
            return new Question(`√${number1 * number1}`, number1, generateChoices(number1) , 4);



    }
}




