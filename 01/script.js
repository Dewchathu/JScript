
function cal() {
  const num1Element = document.getElementById('num1');
  const num2Element = document.getElementById('num2');
  const answerElement = document.getElementById('answer');

  const num1 = parseInt(num1Element.value);
  const num2 = parseInt(num2Element.value);

  const answer = num1 + num2;

  answerElement.innerHTML = answer;
}
