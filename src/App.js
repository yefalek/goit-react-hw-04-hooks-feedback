import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';
import React, { useState } from 'react';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = ({ target }) => {
    const value = target.textContent;
    switch (value) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return;
    }
  };
  const total = good + neutral + bad;

  const countPositiveFeedbackPercentage = total => {
    const percentage = 100;
    return `${percentage * (good / total)}`;
  };

  const buttons = ['good', 'neutral', 'bad'];

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={buttons} onLeaveFeedback={handleFeedback} />
      </Section>
      {total === 0 && <Notification message="No feedback given"></Notification>}
      {total > 0 && (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage(total)}
          />
        </Section>
      )}
    </>
  );
}
