const quizData = [
    {
      question: 'What is a correct syntax to output "Hello World" in C?',
      options: [' System.out.printline("Hello World");', 'cout << "Hello World";', 'Console.WriteLine("Hello World");', 'printf("Hello World");'],
      answer: 'printf("Hello World");',
    },
    {
      question: 'How do you insert COMMENTS in C code?',
      options: ['#', '--', '//', '*'],
      answer: '//',
    },
    {
      question: 'When a variable is created in C, a memory address is assigned to the variable.',
      options: ['True', 'False'],
      answer: 'True',
    },
    {
      question: 'In C, code statements must end with a semicolon (;)',
      options: ['True', 'False'],
      answer: 'True',
    },
    {
      question: 'How can you create a variable with the numeric value 5?',
      options: [
        'int num = 5;',
        'val num = 5;',
        'num = 5;',
        'num = 5 int;',
      ],
      answer: 'int num = 5;',
    },
    {
      question: 'Which function is often used to output values and print text?',
      options: ['output()', 'write()', 'printf()', 'printword()'],
      answer: 'printf()',
    },
    {
      question: 'How can you create a variable with the floating number 2.8?',
      options: [
        'num = 2.8 double;',
        'val num = 2.8;',
        'num = 2.8 float;',
        'float num = 2.8;',
      ],
      answer: 'float num = 2.8;',
    },
    {
      question: 'What is a correct syntax to output "Hello World" in Python?',
      options: ['p("Hello World")', 'echo("Hello World");', 'echo"Hello World" ', 'print("Hello World")'],
      answer: 'print("Hello World")',
    },
    {
      question: 'Which collection is ordered, changeable, and allows duplicate members?',
      options: [
        'DICTIONARY',
        'LIST',
        'TURPLE',
        'SET',
      ],
      answer: 'LIST',
    },
    {
      question: 'How do you start writing an if statement in Python?',
      options: ['if x > y :', 'if (x > y )', 'if x > y then:', 'if (x > y);'],
      answer: 'if x > y :',
    },
    {
      question: 'How do you start writing a while loop in Python?',
      options: ['x > y while {', 'while x > y :', 'while x > y{', 'while( x > y)'],
      answer: 'while x > y :',
    },
    {
      question: 'How do you start writing a for loop in Python?',
      options: ['for x > y :', 'for each x in y :', 'for x in y :', 'for(x in y)'],
      answer: 'for x > y :',
    },
    {
      question: 'Which statement is used to stop a loop?',
      options: ['stop', 'return', 'break', 'exit'],
      answer: 'break',
    },
    {
      question: 'Which one is NOT a legal variable name?',
      options: ['Myvar', '_myvar', 'my-var', 'my_var'],
      answer: 'my-var',
    },
    {
      question: 'n HTML, onblur and onfocus are:',
      options: ['Event attributes', 'HTML elements', 'Style attributes'],
      answer: 'Event attributes',
    },
    {
      question: 'Which input type defines a slider control?',
      options: ['range', 'slider', 'search', 'controls'],
      answer: 'range',
    },
    {
      question: 'Which HTML element defines navigation links?',
      options: ['<navigate>', '<navigation>', '<nav>', '<navlink>'],
      answer: '<nav>',
    },
    {
      question: 'Which property is used to change the background color?',
      options: ['bgcolor', 'background-color', 'bg-color', 'backgroundcolor'],
      answer: 'background-color',
    },
    {
      question: 'Which CSS property is used to change the text color of an element?',
      options: ['fgcolor', 'text-color', 'color', 'textcolor'],
      answer: 'color',
    },
    {
      question: 'Which property is used to change the font of an element?',
      options: ['font-style', 'font-family', 'font-wright', 'text-font'],
      answer: 'font-family',
    },
  ];
  
  const quizContainer = document.getElementById('quiz');
  const resultContainer = document.getElementById('result');
  const submitButton = document.getElementById('submit');
  const retryButton = document.getElementById('retry');
  const showAnswerButton = document.getElementById('showAnswer');
  
  let currentQuestion = 0;
  let score = 0;
  let incorrectAnswers = [];
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  function displayQuestion() {
    const questionData = quizData[currentQuestion];
  
    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = questionData.question;
  
    const optionsElement = document.createElement('div');
    optionsElement.className = 'options';
  
    const shuffledOptions = [...questionData.options];
    shuffleArray(shuffledOptions);
  
    for (let i = 0; i < shuffledOptions.length; i++) {
      const option = document.createElement('label');
      option.className = 'option';
  
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'quiz';
      radio.value = shuffledOptions[i];
  
      const optionText = document.createTextNode(shuffledOptions[i]);
  
      option.appendChild(radio);
      option.appendChild(optionText);
      optionsElement.appendChild(option);
    }
  
    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);
  }
  
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    if (selectedOption) {
      const answer = selectedOption.value;
      if (answer === quizData[currentQuestion].answer) {
        score++;
      } else {
        incorrectAnswers.push({
          question: quizData[currentQuestion].question,
          incorrectAnswer: answer,
          correctAnswer: quizData[currentQuestion].answer,
        });
      }
      currentQuestion++;
      selectedOption.checked = false;
      if (currentQuestion < quizData.length) {
        displayQuestion();
      } else {
        displayResult();
      }
    }
  }
  
  function displayResult() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'inline-block';
    resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
  }
  
  function retryQuiz() {
    currentQuestion = 0;
    score = 0;
    incorrectAnswers = [];
    quizContainer.style.display = 'block';
    submitButton.style.display = 'inline-block';
    retryButton.style.display = 'none';
    showAnswerButton.style.display = 'none';
    resultContainer.innerHTML = '';
    displayQuestion();
  }
  
  function showAnswer() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'none';
  
    let incorrectAnswersHtml = '';
    for (let i = 0; i < incorrectAnswers.length; i++) {
      incorrectAnswersHtml += `
        <p>
          <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
          <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
          <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
        </p>
      `;
    }
  
    resultContainer.innerHTML = `
      <p>You scored ${score} out of ${quizData.length}!</p>
      <p>Incorrect Answers:</p>
      ${incorrectAnswersHtml}
    `;
  }
  
  submitButton.addEventListener('click', checkAnswer);
  retryButton.addEventListener('click', retryQuiz);
  showAnswerButton.addEventListener('click', showAnswer);
  
  displayQuestion();