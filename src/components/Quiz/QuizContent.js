import React, { useState } from 'react';
import QuizResult from './QuizResult';

function QuizContent({ questions, onAnswer, answers, onReset }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleAnswerClick = (index) => {
        onAnswer(index);
        setCurrentQuestion(prevQuestion => prevQuestion + 1);
    };

    const handleBackClick = () => {
        if (currentQuestion === 0) {
            onReset();
        } else {
            onAnswer(null);
            setCurrentQuestion(prevQuestion => prevQuestion - 1);
        }
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
                    <div className="text-center">
                    <button className="btn btn-block" id="q-button" onClick={() => handleAnswerClick(index)}>
                        {option}
                    </button>
                    </div>
                </div>
            ))}
            <div className="progress mt-3">
                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: `${(currentQuestion + 1) / questions.length * 100}%`}} aria-valuenow={(currentQuestion + 1) / questions.length * 100} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="text-center mt-2 fs-4 text-secondary">
                Progress: {currentQuestion + 1} / {questions.length}
            </div>
            <div className="text-center mt-2">
                <button className="btn btn-outline-secondary" onClick={handleBackClick}>Back</button>
            </div>
        </div>
    );
}

export default QuizContent;
