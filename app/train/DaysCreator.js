class Question {
    constructor(quiz, answer, choices, type) {
        this.question = quiz;
        this.answer = answer;
        this.choices = choices;
        this.type = type;
    }
}

function getRandomDate(yearStart = 1900, yearEnd = 2100) {
    let year = Math.floor(Math.random() * (yearEnd - yearStart + 1)) + yearStart;
    let month = Math.floor(Math.random() * 12) + 1;
    let day = Math.floor(Math.random() * 28) + 1; // Avoiding issues with 30/31-day months

    return new Date(year, month - 1, day); // Month is zero-based
}

function formatDate(date) {
    let day = String(date.getDate()).padStart(2, "0");
    let month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

function getDayOfWeek(date) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[date.getDay()];
}

function generateDayChoices(correctDay) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let choices = new Set();
    choices.add(correctDay);

    while (choices.size < 4) {
        let randomDay = days[Math.floor(Math.random() * days.length)];
        choices.add(randomDay);
    }

    return Array.from(choices).sort(() => Math.random() - 0.5);
}

export function GenerateRandomDateQuestion() {
    let randomDate = getRandomDate();
    let correctDay = getDayOfWeek(randomDate);
    let choices = generateDayChoices(correctDay);
    let formattedDate = formatDate(randomDate);

    let questionText = `${formattedDate}?`;

    return new Question(questionText, correctDay, choices, 6);
}


