import StatsView from './statsView';

const stats = (state) => {
  const obj = new StatsView(state);
  return obj.actions();
};

export default stats;
