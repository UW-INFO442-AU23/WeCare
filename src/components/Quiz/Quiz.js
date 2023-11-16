import React, { useState } from 'react';
import QuizContent from './QuizContent';
import { Header } from '../Resources';

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
        // console.log("New Answer Added:", answer);
        // console.log("Updated Answers Array:", answers);
    };

    return (
        <div className="container mt-4">
            {!started && (
                <div className="mb-4">
                    {Header("Hunger Insight Quiz")}
                    <p className="lead">
                        In just 5 questions, we aim to understand your preferences and values when it comes to combating global hunger.
                        Each of us has a unique approach to giving, and our passions guide how we make a difference. This quiz is tailored to align
                        your personal inclinations with charities that resonate with your beliefs, ensuring your contributions make the most meaningful impact.
                        Whether you prioritize immediate relief, sustainability, cultural respect, or a mix of these factors, we'll help connect you with the right charity.
                    </p>
                    <p className="lead fw-bold">
                        Ready to find your match and contribute to the Zero Hunger goal? Let's get started!
                    </p>
                </div>
            )}
            {started ? (
                <QuizContent questions={questions} onAnswer={handleAnswer} answers={answers} onReset={handleResetQuiz} />
            ) : (
                <div className="text-center">
                    <button className="btn btn-success" onClick={handleStartQuiz}>Start Quiz</button>
                </div>
            )}
        </div>
    );
}

export default Quiz;
