import GameView from './gameView';

const game = (level) => {
  const obj = new GameView(level);
  return obj.actions(level);
};

export default game;
