const questions = [
    "Сіз эмоцияларыңызды туындаған сәтте қаншалықты жиі сезінесіз?",
    "Сіз белгілі бір эмоцияны не үшін сезінетініңізді қаншалықты жақсы түсінесіз?",
    "Қиын жағдайларда эмоцияларыңызды және олардың көрінісін қаншалықты жиі бақылайсыз?",
    "Эмоцияларыңызды басқа адамдарға білдіру сізге қаншалықты оңай?",
    "Басқа адамдардың эмоцияларын олардың бет-әлпеті, қимылдары және дауысы арқылы қаншалықты жақсы тани аласыз?",
    "Сіз басқа адамдарға эмоционалдық қолдауды қаншалықты жиі көрсетесіз?",
    "Сіз ашу немесе қайғы сияқты теріс эмоциялармен қаншалықты жақсы күресесіз?",
    "Басқа адамдармен қақтығыстарды қаншалықты тиімді шеше аласыз?",
    "Сіз басқа адамдарға қаншалықты жиі эмпатия көрсетесіз?",
    "Сіз өз эмоцияларыңызды және басқа адамдардың эмоцияларын басқару қабілетіңізге қаншалықты сенімдісіз?"
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const currentQuestionElement = document.getElementById('current-question');
const totalQuestionsElement = document.getElementById('total-questions');
const resultContainer = document.getElementById('result-container');
const resultScoreElement = document.getElementById('result-score');
const resultDescriptionElement = document.getElementById('result-description');
const progressBar = document.getElementById('progress-bar');

totalQuestionsElement.textContent = questions.length;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.style.display = "none";
    setNextQuestion();
    updateProgressBar();
}

function setNextQuestion() {
    showQuestion(questions[currentQuestionIndex]);
    currentQuestionElement.textContent = currentQuestionIndex + 1;
}

function showQuestion(question) {
    questionElement.textContent = question;
}

answerButtonsElement.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn')) {
        selectAnswer(parseInt(e.target.getAttribute('data-score')));
    }
});

function selectAnswer(points) {
    score += points;
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setNextQuestion();
        updateProgressBar();
    } else {
        showResult();
    }
}

function updateProgressBar() {
    const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = progressPercentage + "%";
}

function showResult() {
    let resultText;
    if (score >= 25) {
        resultText = "Өте жоғары эмоционалды интеллект деңгейі. Сіз өзіңіздің эмоцияларыңызды жақсы сезінесіз, оларды басқара аласыз және басқа адамдардың эмоцияларын жақсы түсінесіз. Сіз өз сезімдеріңізді оңай білдіресіз және айналаңыздағыларға жиі эмоционалдық қолдау көрсетесіз.";
    } else if (score >= 18) {
        resultText = "Жоғары эмоционалды интеллект деңгейі. Сіз өзіңіздің эмоцияларыңызды жақсы сезінесіз және көбінесе оларды басқара аласыз. Сіз басқа адамдардың эмоцияларын тани аласыз және жиі эмпатия көрсетесіз.";
    } else if (score >= 10) {
        resultText = "Орташа эмоционалды интеллект деңгейі. Сіз кейде өз эмоцияларыңызды сезінесіз және басқара аласыз, бірақ әлі де жұмыс істеу керек нәрселер бар. Сізге басқа адамдардың эмоцияларын тану немесе өз сезімдеріңізді білдіру қиын болуы мүмкін.";
    } else {
        resultText = "Төмен эмоционалды интеллект деңгейі. Сізге өз эмоционалды дағдыларыңызды дамытуға көбірек назар аудару керек. Сіз эмоцияларыңызды сирек сезінесіз және оларды басқаруда қиындықтар тудыруы мүмкін. Сондай-ақ, сізге басқа адамдардың эмоцияларын түсіну және өз сезімдеріңізді білдіру қиын болуы мүмкін.";
    }

    resultScoreElement.textContent = `Сіз ${score} балл жинадыңыз.`;
    resultDescriptionElement.textContent = resultText;
    resultContainer.style.display = "flex";
}

function closeResult() {
    resultContainer.style.display = "none";
    startQuiz();
}

startQuiz();
