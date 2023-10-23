// QuizContent.js
import React, { useState } from 'react';

function QuizContent({ questions, onAnswer }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleAnswerClick = (answer) => {
        onAnswer(answer);
        setCurrentQuestion(prevQuestion => prevQuestion + 1);
    };

    // Check if we've reached the end of the questions array
    if (currentQuestion >= questions.length) {
        return <div className="text-center mt-4">Thank you for taking the quiz!</div>;
    }

    return (
        <div className="container mt-4">
            <h2>{questions[currentQuestion].question}</h2>
            {questions[currentQuestion].options.map((option, index) => (
                <div key={index} className="mb-2">
                    <button className="btn btn-primary btn-block" onClick={() => handleAnswerClick(option)}>
                        {option}
                    </button>
                </div>
            ))}
            <div className="progress mt-3">
                <div className="progress-bar" role="progressbar" style={{width: `${(currentQuestion + 1) / questions.length * 100}%`}} aria-valuenow={(currentQuestion + 1) / questions.length * 100} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="text-center mt-2">
                Progress: {currentQuestion + 1} / {questions.length}
            </div>
        </div>
    );
}

export default QuizContent;
