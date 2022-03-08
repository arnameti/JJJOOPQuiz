import Question from "./Question.js";
import Quiz from "./Quiz.js";

const App = (() => {
  // cache the DOM
  const quizEl = document.querySelector(".jabquiz");
  const quizQuestionEl = document.querySelector(".jabquiz__question");
  const trackerEl = document.querySelector(".jabquiz__tracker");
  const taglineEl = document.querySelector(".jabquiz__tagline");
  const choicesEl = document.querySelector(".jabquiz__choices");
  const progressInnerEl = document.querySelector(".progress__inner");
  const nextButtonEl = document.querySelector(".next");
  const restartButtonEl = document.querySelector(".restart");

  const q1 = new Question(
    "First President of US?",
    ["Barack", "Osama", "George", "Monkey"],
    2
  );

  const q2 = new Question(
    "When was JavaScript created?",
    ["June 1995", "May 1995", "July 1885", "Sep 1996"],
    1
  );

  const q3 = new Question(
    "What does CSS stand for",
    [
      "County Sheriff Service",
      "Cascading Sexy Sheets",
      "Cascading Style Sheet",
      "Batman",
    ],
    2
  );

  const q4 = new Question(
    "The full form of HTML is...",
    [
      "Hyper Text Markup Language",
      "Hold The Mic",
      "George",
      "ERROR",
      "Superman",
    ],
    0
  );

  const q5 = new Question(
    "console.log(typeof []) would return what?",
    ["Array", "Object", "null", "array"],
    1
  );

  const quiz = new Quiz([q1, q2, q3, q4, q5]);
})();
