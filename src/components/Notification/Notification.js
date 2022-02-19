import React from 'react';
import PropTypes from 'prop-types';
import { String } from './notification.styled';

export default function Notification({ message }) {
  return <String>{message}</String>;
}
Notification.propTypes = {
  message: PropTypes.string,
};
