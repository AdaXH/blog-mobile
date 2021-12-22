const SEC = 1000;
const MINS = 60 * SEC;
const HOUR = SEC * 60;
const DAY = 24 * HOUR;

const d = new Date();
const curYear = d.getFullYear();
const curMonth = d.getMonth() + 1;
const curDay = d.getDate();

export const TIME = {
  MINS,
  SEC,
  HOUR,
  DAY,
  curYear,
  curMonth,
  curDay,
};
