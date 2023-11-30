import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import QuizResult from '../components/Quiz/QuizResult';
import { AuthContext } from '../AuthContext';
import '@testing-library/jest-dom';

const mockAuthContext = {
  user: { uid: 'testUserId' } // Add more user properties if needed
};

const customRender = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <BrowserRouter> {/* Wrap the UI with BrowserRouter */}
      <AuthContext.Provider value={providerProps}>{ui}</AuthContext.Provider>
    </BrowserRouter>,
    renderOptions
  );
};

describe('QuizResult Component', () => {
  it('renders correctly based on answers', () => {
    const answers = [0, 1, 0, 1, 0];
    customRender(<QuizResult answers={answers} />, { providerProps: mockAuthContext });

    expect(screen.getByText('West Seattle Food Bank')).toBeInTheDocument();
    expect(screen.getByText('Northwest Harvest')).toBeInTheDocument();
  });

  it('renders the correct charity cards for a specific set of answers', () => {
    customRender(<QuizResult answers={[0, 0, 0, 0, 0]} />, { providerProps: mockAuthContext });

    expect(screen.getByText('West Seattle Food Bank')).toBeInTheDocument();
    expect(screen.getByText('Washington Farmland Trust')).toBeInTheDocument();
    expect(screen.getByText('Pike Place Market Foundation')).toBeInTheDocument();
    expect(screen.getByText('El Centro de la Raza')).toBeInTheDocument();
    expect(screen.getByText('Hunger Intervention Program')).toBeInTheDocument();
  });

  it('renders different charity cards for a different combination of answers', () => {
    customRender(<QuizResult answers={[1, 1, 1, 1, 1]} />, { providerProps: mockAuthContext });

    expect(screen.getByText('Harvest Against Hunger')).toBeInTheDocument();
    expect(screen.getByText('Northwest Harvest')).toBeInTheDocument();
    expect(screen.getByText('Food Bank')).toBeInTheDocument();
    expect(screen.getByText('Feeding America, Food Lifeline')).toBeInTheDocument();
    expect(screen.getByText('United Way of King County')).toBeInTheDocument();
  });

  it('renders charity cards for a different combination of answers', () => {
    customRender(<QuizResult answers={[0, 1, 0, 1, 0]} />, { providerProps: mockAuthContext });

    expect(screen.getByText('West Seattle Food Bank')).toBeInTheDocument();
    expect(screen.getByText('Northwest Harvest')).toBeInTheDocument();
    expect(screen.getByText('Pike Place Market Foundation')).toBeInTheDocument();
    expect(screen.getByText('Feeding America, Food Lifeline')).toBeInTheDocument();
    expect(screen.getByText('Hunger Intervention Program')).toBeInTheDocument();
  });

  it('handles empty or invalid answers gracefully', () => {
    customRender(<QuizResult answers={[]} />, { providerProps: mockAuthContext });

    expect(screen.queryByText('West Seattle Food Bank')).not.toBeInTheDocument();
  });
});
