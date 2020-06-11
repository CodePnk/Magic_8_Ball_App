// 20 Possible Magic 8 Ball Answers.
const possibleAnswers = [
  `It is certain.`,
  `It is decidedly so.`,
  `Without a doubt.`,
  `Yes – definitely.`,
  `You may rely on it.`,
  `As I see it, yes.`,
  `Most likely.`,
  `Outlook good.`,
  `Yes.`,
  `Signs point to yes.`,
  `Reply hazy, try again.`,
  `Ask again later.`,
  `Better not tell you now.`,
  `Cannot predict now.`,
  `Concentrate and ask again.`,
  `Don't count on it.`,
  `My reply is no.`,
  `My sources say no.`,
  `Outlook not so good.`,
  `Very doubtful.`,
];
//
// let clicked;

// Adding html elements to JavaScript variables
const htmlAnswer = document.querySelector('.answer');
const submitBtn = document.querySelector('.submitBtn');
const resetBtn = document.querySelector('.resetBtn');
const question = document.querySelector('#question-input');
const ball = document.querySelector('.ball');
const answerDisplay = document.querySelector('.logo-container');

// Picks a random value from array between 0-19
function giveAnswer() {
  const fortune = possibleAnswers[Math.floor(Math.random() * 20)];
  htmlAnswer.insertAdjacentText('afterbegin', fortune);
}

// Adds shake class to ball figure
function animate() {
  ball.classList.toggle('shake');
}

// Switches logo container to hidden and unhides answer container
function getAnswer() {
  answerDisplay.classList.toggle('logo-container');
  answerDisplay.classList.toggle('answer-container');
  giveAnswer();
}

submitBtn.onclick = function() {
  // Checks if input field is blank and outputs an alert if so.
  if (question.value == false) {
    alert('ENTER A question');
    // If valid input runs rest of program
  } else {
    // declares let and sets it to true on click of submit
    const clicked = true;
    animate();
    getAnswer();
    // on click hide submit button and unhide reset button
    if (clicked === true) {
      submitBtn.classList.add('hide');
      resetBtn.classList.toggle('unhide');
    }
  }
  // on click of reset-button reload page
  resetBtn.onclick = function() {
    location.reload();
  };
};
