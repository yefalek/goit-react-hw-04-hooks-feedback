import React from 'react';
import PropTypes from 'prop-types';
import { Block, Item } from './statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <Block>
    <Item>Good: {good};</Item>
    <Item>Neutral: {neutral};</Item>
    <Item>Bad: {bad};</Item>
    <Item>Total: {total};</Item>
    <Item>Positive feedback: {positivePercentage}%;</Item>
  </Block>
);

export default Statistics;

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
