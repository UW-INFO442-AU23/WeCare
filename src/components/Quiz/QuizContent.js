import React, { useState } from 'react';
import QuizResult from './QuizResult';

function QuizContent({ questions, onAnswer, answers}) {
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleAnswerClick = (index) => {
        onAnswer(index);
        // console.log("Answer Selected for Question", currentQuestion + 1, ":", questions[currentQuestion].options[index]);
        setCurrentQuestion(prevQuestion => prevQuestion + 1);
    };

    const handleBackClick = () => {
        onAnswer(null);
        setCurrentQuestion(prevQuestion => prevQuestion - 1);
    };

    // Check if we've reached the end of the questions array
    if (currentQuestion >= questions.length) {
        return <QuizResult answers={answers} />;
    }

    return (
        <div className="container mt-4">
            <h2>{questions[currentQuestion].question}</h2>
            {questions[currentQuestion].options.map((option, index) => (
                <div key={index} className="mb-2">
                    <button className="btn btn-primary btn-block" onClick={() => handleAnswerClick(index)}>
                        {option}
                    </button>
                </div>
            ))}
            <div className="progress mt-3">
                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: `${(currentQuestion + 1) / questions.length * 100}%`}} aria-valuenow={(currentQuestion + 1) / questions.length * 100} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="text-center mt-2 fs-4 text-secondary">
                Progress: {currentQuestion + 1} / {questions.length}
            </div>
            {currentQuestion > 0 && (
                <div className="text-center mt-2">
                    <button className="btn btn-secondary" onClick={handleBackClick}>Back</button>
                </div>
            )}
        </div>
    );
}

export default QuizContent;
