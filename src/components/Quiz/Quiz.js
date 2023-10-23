// Quiz.js

import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import QuizContent from './QuizContent';

function Quiz() {
    const questions = [
      {
          question: 'Engagement',
          options: [
              'I enjoy participating in community events and volunteering.',
              'I enjoy contributing to charities in a more private or behind-the scenes manner.'
          ]
      },
      {
          question: 'Environmental Impact',
          options: [
              'It’s important to me that the charity focuses on long-term sustainable solutions (education, farming support).',
              'While I care about the environment, my primary concern is addressing immediate hunger needs or relief efforts.'
          ]
      },
      {
          question: 'Culture',
          options: [
              'I think respecting cultural preferences is crucial when it comes to food assistance.',
              'I think providing any available food is more important than cultural preferences.'
          ]
      },
      {
          question: 'Local vs Global Impact',
          options: [
              'I want to support charities that primarily focus on local community needs.',
              'I prefer to support charities that focus on local community needs but also have global reach, addressing widespread issues.'
          ]
      },
      {
          question: 'Health Focus',
          options: [
              'I want to support charities that address malnutrition and related health issues.',
              'I prefer charities that tackle the root causes of hunger, like poverty and inequality.'
          ]
      }
  ];  

    const [started, setStarted] = useState(false);
    const [answers, setAnswers] = useState([]);
    //user answers are stored here.

    const handleStartQuiz = () => {
        setStarted(true);
    };

    const handleAnswer = (answer) => {
        setAnswers(prevAnswers => [...prevAnswers, answer]);
    };

    return (
        <div className="container mt-4">
            {started ? (
                <QuizContent questions={questions} onAnswer={handleAnswer} />
            ) : (
                <div className="text-center">
                    <button className="btn btn-success" onClick={handleStartQuiz}>Start Quiz</button>
                </div>
            )}
        </div>
    );
}

export default Quiz;
