

//Document attatchment declarations

var answerState = document.querySelector("#answer-quality");

//replace with a single class selector?

var option blue berry = document.querySelector("#option blue berry”);

var option strawberry = document.querySelector("#option strawberry”);

var option mango= document.querySelector("#option mango”);

var option cherry = document.querySelector("#option cherry”);

var quizTitle = document.querySelector(".quiz body”);

var timeDisplay = document.querySelector("#time-display");



// document attatchment utilizations

var optionIndex = [option blueberry, option strawberry, option mango, option cherry ];





// pseudo-constants

var timeSet = 80;

var timeLeft = 0;

var ansRight = 0;

var ansWrong = 0;



var turnNum = 5;

//var curTurn = 0;

//var finished = false;











//selection quizframe:

// from now on, the title, choices pairing will be reffered to as a quizframe

var quizChoice = {

    title: "What kind of Quiz do you want to take?",

    choices: [“Makeup, “Clothes”, “”Heels, “Nails”]

}



// Quiz/selection arrays:

//  each quiz contains 5 questions, each answer key likewise contains 5 entries

var MakeKey = [2, 2, 3, 0, 1]; //complete

var ClothKey = [2, 0, 0, 1, 3]; //complete

var HeelKey = [2, 2, 3, 0, 1];

var NailKey = [2, 2, 3, 0, 1];



var quizKey = [MakeQuestions, clothesQuestions, heelQuestions, nailQuestions];



var codeQuestions = [

    {

        title: "Commonly used makeup brands

        choices: [“Shaebutter”, “NARS, “PLT”, “Apple”],

        answer: 2

    },

    {

        title: "The brand with lip plumping gloss,

        choices: [“Nars”, “Too face”, “elf”, “revlon”],

        answer: 2

    },

    {

        title: “Brand made by a famous pop artist”,

        choices: [“ Rihanna “Fenty, " Apple “bottom jeans, “ “Chanel, " Elf”],

        answer: 1

    },

    {

        title: "The kind brush used to contour,”

        choices: [“angled brush”, “spoolie”, “sponge”, “foundation” ],

        answer: 1

    },

    {

        title: " which is used to provide a healthy glow”,

        choices: [“highlighter”, “bronzer, " blush”, “ contour”],

        answer: 1

    }

];