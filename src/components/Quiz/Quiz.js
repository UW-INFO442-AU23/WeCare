import React, { useState } from 'react';
import QuizContent from './QuizContent';
import { Header } from '../Resources/Resources';

function Quiz() {
    const questions = [
      {
          question: 'Question 1: Engagement',
          options: [
              'I enjoy participating in community events and volunteering.',
              'I enjoy contributing to charities in a more private or behind-the scenes manner.'
          ]
      },
      {
          question: 'Question 2: Environmental Impact',
          options: [
              'It’s important to me that the charity focuses on long-term sustainable solutions (education, farming support).',
              'While I care about the environment, my primary concern is addressing immediate hunger needs or relief efforts.'
          ]
      },
      {
          question: 'Question 3: Culture',
          options: [
              'I think respecting cultural preferences is crucial when it comes to food assistance.',
              'I think providing any available food is more important than cultural preferences.'
          ]
      },
      {
          question: 'Question 4: Local vs Global Impact',
          options: [
              'I want to support charities that primarily focus on local community needs.',
              'I prefer to support charities that focus on local community needs but also have global reach, addressing widespread issues.'
          ]
      },
      {
          question: 'Question 5: Health Focus',
          options: [
              'I want to support charities that address malnutrition and related health issues.',
              'I prefer charities that tackle the root causes of hunger, like poverty and inequality.'
          ]
      }
  ];

    const [started, setStarted] = useState(false);
    const [answers, setAnswers] = useState([]);

    const handleStartQuiz = () => {
        setStarted(true);
    };

    const handleResetQuiz = () => {
        setStarted(false);
        setAnswers([]);
    };

    const handleAnswer = (answer) => {
        if (answer === null) {
            setAnswers(prevAnswers => prevAnswers.slice(0, -1)); // Remove the last answer
        } else {
            setAnswers(prevAnswers => [...prevAnswers, answer]);
        }
    };
    

return (
    <div className="container">
        <div class="mt-4 quizbody">
        {!started && (
            <div className="mb-4">
                <div className="my-5">
                    {Header("Hunger Insight Quiz")}
                </div>
                <div className="lead my-5 quiz-instructions">
                    <h1 style={{ textAlign: 'left', fontSize: '1.2em', fontWeight: 'bold'}}>Quiz Instructions</h1>
                    <ul>
                        <li>
                            Answer 5 questions about:
                            <ul>
                                <li>Engagement</li>
                                <li>Impact</li>
                                <li>Culture</li>
                                <li>Local vs global impact</li>
                                <li>Health focus</li>
                            </ul>
                        </li>
                        <li>
                            Click on the answer that better encompasses what you value and agree with.
                        </li>
                        <li>
                            Press the back button if you need to move to the previous question or to the quiz home page.
                        </li>
                    </ul>
                </div>
                <div className="text-center">
                    <p className="fw-bold">
                        Ready to find your match and contribute to the Zero Hunger goal? Let's get started!
                    </p>
                </div>
            </div>  
        )}
        </div>
        {started ? (
            <QuizContent questions={questions} onAnswer={handleAnswer} answers={answers} onReset={handleResetQuiz} />
        ) : (
            <div className="text-center">
                <button className="btn q-btn" onClick={handleStartQuiz}>Start Quiz</button>
            </div>
        )}
    </div>
    
);
}

export default Quiz;
