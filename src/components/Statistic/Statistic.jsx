import css from './Statistic.module.css';

export const Statistic = ({ good, bad, neutral, total, percentage }) => {
  return (
    <div>
      <h2>Statistic: </h2>
      <ul className={css.list}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {percentage}%</li>
      </ul>
    </div>
  );
};
