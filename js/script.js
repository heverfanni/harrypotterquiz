// alert(quiz.length);
function getQuestion(questionIndex) {
    return quiz[questionIndex];
}

function displayQuestion(question) {
    var questionBox = document.querySelector('.question-box');
    var questionTitle = document.createElement('h3');
    var ul = document.createElement('ul');

    for (var k in question) {
        if (k.indexOf('opt') != -1) {
            var li = document.createElement('li');
            var label = document.createElement('label');
            var inputRadio = document.createElement('input');
            inputRadio.setAttribute('type', 'radio');
            inputRadio.setAttribute('name', 'harrypotter');
            inputRadio.setAttribute('value', question[k]);

            label.appendChild(inputRadio);
            label.innerHTML += question[k];
            li.appendChild(label);
            ul.appendChild(li);
        }
    }

    questionTitle.innerHTML = question.que;
    questionBox.appendChild(questionTitle);
    questionBox.appendChild(ul);

}

var startButton = document.querySelector('.btn-start');
startButton.addEventListener('click', start, false);

function start() {
    var question = getQuestion(5);
    displayQuestion(question);
}