import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from '../Section/Section';

export default class Feedback extends Component {
  static defaultProps = {
    step: 1,
  };

  static propTypes = {
    step: PropTypes.number,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = e => {
    const { name } = e.target;
    this.setState(prevState => ({
      [name]: prevState[name] + this.props.step,
    }));
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const positivePercentage = this.state.good / this.countTotalFeedback();
    return (positivePercentage * 100).toFixed(0);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section
          title="Statistics"
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
          options={{ good, neutral, bad }}
          onLeaveFeedback={this.handleLeaveFeedback}
        />
      </div>
    );
  }
}
