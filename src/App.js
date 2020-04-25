import React, { Component, Fragment } from 'react';
import FeedbackOptions from './components/Feedback_01/feedback/feedback';
import Section from './components/Feedback_01/Section/Section';
import Statistics from './components/Feedback_01/Statistics/Statistics';
import Notification from './components/Feedback_01/Notification/Notification';

const feedBackOptions = [
  { id: 1, name: 'good' },
  { id: 2, name: 'neutral' },
  { id: 3, name: 'bad' },
];

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const countPositiveFeedback = (
      (good / this.countTotalFeedback()) *
      100
    ).toFixed();
    return countPositiveFeedback;
  };

  handleChange = e => {
    const { name } = e.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const countPositiveFeedback = Number(
      this.countPositiveFeedbackPercentage(),
    );
    return (
      <Fragment>
        <Section title="Plaese leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.handleChange}
            options={feedBackOptions}
          />
        </Section>
        <Section title="Statistic">
          {good || neutral || bad ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={countPositiveFeedback}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </Fragment>
    );
  }
}
