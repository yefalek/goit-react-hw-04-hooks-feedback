import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './feedbacks.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(option => (
      <Button key={option} onClick={onLeaveFeedback}>
        {option}
      </Button>
    ))}
  </div>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
