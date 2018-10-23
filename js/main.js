import gameTemplate from './screens/gameTemplate';
import changeScreen from './changeScreen';
import data from './data';

changeScreen(gameTemplate(data.levels[data.currentState.level]));
