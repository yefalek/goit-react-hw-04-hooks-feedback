import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';
import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = ({ target }) => {
    const value = target.textContent;
    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }));
  };

  countTotalFeedback = total => {
    const { good, neutral, bad } = this.state;
    return (total = good + neutral + bad);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const percentage = 100;
    return `${percentage * (good / total)}`;
  };

  render() {
    const buttons = Object.keys(this.state);
    const total = this.countTotalFeedback();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={buttons}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        {total === 0 && (
          <Notification message="No feedback given"></Notification>
        )}
        {total > 0 && (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </>
    );
  }
}

export default App;
