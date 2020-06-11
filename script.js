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

const htmlAnswer = document.querySelector('.answer');
const submitBtn = document.querySelector('.submitBtn');
const resetBtn = document.querySelector('.resetBtn');

const ball = document.querySelector('.ball');
const answerDisplay = document.querySelector('.logo-container');

function giveAnswer() {
  const fortune = possibleAnswers[Math.floor(Math.random() * 20)];
  htmlAnswer.insertAdjacentText('afterbegin', fortune);
}

function animate() {
  ball.classList.toggle('shake');
}

function getAnswer() {
  answerDisplay.classList.toggle('logo-container');
  answerDisplay.classList.toggle('answer-container');
  giveAnswer();
}

let clicked = 0;

submitBtn.onclick = function() {
  clicked = true;
  animate();
  getAnswer();
  // on click hide submit button and unhide reset button
  if (clicked === true) {
    submitBtn.classList.add('hide');
    resetBtn.classList.toggle('unhide');
  }
};
// on button click reload page
resetBtn.onclick = function() {
  location.reload();
};
