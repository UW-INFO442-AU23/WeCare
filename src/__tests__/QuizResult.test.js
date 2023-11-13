import React from 'react';
import { render, screen } from '@testing-library/react';
import QuizResult from '../components/Quiz/QuizResult';
import '@testing-library/jest-dom';

describe('QuizResult Component', () => {
  it('renders correctly based on answers', () => {
    const answers = [0, 1, 0, 1, 0]; 
    render(<QuizResult answers={answers} />);

    expect(screen.getByText('West Seattle Food Bank')).toBeInTheDocument();
    expect(screen.getByText('Northwest Harvest')).toBeInTheDocument();
  });

  it('renders the correct charity cards for a specific set of answers', () => {
    render(<QuizResult answers={[0, 0, 0, 0, 0]} />);
    
    expect(screen.getByText('West Seattle Food Bank')).toBeInTheDocument();
    expect(screen.getByText('Washington Farmland Trust')).toBeInTheDocument();
    expect(screen.getByText('Pike Place Market Foundation')).toBeInTheDocument();
    expect(screen.getByText('El Centro de la Raza')).toBeInTheDocument();
    expect(screen.getByText('Hunger Intervention Program')).toBeInTheDocument();
  });

  it('renders different charity cards for another set of answers', () => {
    render(<QuizResult answers={[1, 1, 1, 1, 1]} />);
  
    expect(screen.getByText('Harvest Against Hunger')).toBeInTheDocument();
    expect(screen.getByText('Northwest Harvest')).toBeInTheDocument();
    expect(screen.getByText('Food Bank')).toBeInTheDocument();
    expect(screen.getByText('Feeding America, Food Lifeline')).toBeInTheDocument();
    expect(screen.getByText('United Way of King County')).toBeInTheDocument();
  });

  it('renders charity cards for a different combination of answers', () => {
    render(<QuizResult answers={[0, 1, 0, 1, 0]} />);
  
    expect(screen.getByText('West Seattle Food Bank')).toBeInTheDocument();
    expect(screen.getByText('Northwest Harvest')).toBeInTheDocument();
    expect(screen.getByText('Pike Place Market Foundation')).toBeInTheDocument();
    expect(screen.getByText('Feeding America, Food Lifeline')).toBeInTheDocument();
    expect(screen.getByText('Hunger Intervention Program')).toBeInTheDocument();
  });
  
  it('handles empty or invalid answers gracefully', () => {
    render(<QuizResult answers={[]} />);
  
    expect(screen.queryByText('West Seattle Food Bank')).not.toBeInTheDocument();
  });
  
  // Add more tests as necessary, such as checking for no answers or different combinations
});
