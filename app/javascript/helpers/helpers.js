import { error } from './notifications';

export const formatDate = (d) => {
  const YYYY = d.getFullYear();
  const MM = `0${d.getMonth() + 1}`.slice(-2);
  const DD = `0${d.getDate()}`.slice(-2);

  return `${YYYY}-${MM}-${DD}`;
};

export const handleAjaxError = (err) => {
  error('Something went wrong');
  console.warn(err);
};

export const validateEvent = (event) => {
  if (!isValidDate(event.event_date)) {
    errors.event_date = 'You must enter a valid date';
  }
  return errors;
};