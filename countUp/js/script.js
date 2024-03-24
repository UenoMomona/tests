const countUpButton = document.getElementById('up');
const result = document.getElementById('result');

function PushedCountUp(){
  let num = parseInt(result.innerText);
  num = num ? num : 0;
  num += 1;
  result.innerText = num;
};

PushedCountUp();

countUpButton.addEventListener('click', function(){
  PushedCountUp();
});