import assert from 'assert';
import data from '../data';
import changeLevel from '../changeLevel';
import constants from '../constants';
import setLives from '../setLives';
import timer from '../timer';
import header from './header';
import getElementFromTemplate from '../getElementFromTemplate';


describe(`Game`, () => {


  describe(`Check Initial State`, () => {
    it(`should be 3 lives on start`, () => {
      assert.equal(3, data.initialState.lives);
    });
    it(`should be 3 levels on game`, () => {
      assert.deepEqual(3, data.initialState.answers.stats.length);
    });
    it(`should be 30 seconds on game-level`, () => {
      assert.equal(30, data.initialState.time);
    });
  });

  describe(`Check level logic`, () => {
    it(`shouldn't be negative level`, () => {
      const updateLevel = () => {
        changeLevel(-1);
      };
      assert.throws(updateLevel);
    });

    it(`shouldn't be more then level count`, () => {
      const updateLevel = () => {
        changeLevel(constants.LEVELS);
      };
      assert.throws(updateLevel);
    });
  });

  describe(`Check lives logic`, () => {
    it(`shouldn't be negative lives`, () => {
      const changeLives = () => {
        setLives(-1);
      };
      assert.throws(changeLives);
    });
    it(`shouldn't be lives more then max lives count`, () => {
      const changeLives = () => {
        setLives(constants.LIVES + 1);
      };
      assert.throws(changeLives);
    });
    it(`should set 3 lives`, () => {
      assert.equal(3, setLives(3));
    });
  });

  describe(`Check timer logic`, () => {
    it(`shouldn't be negative time`, () => {
      const changeTime = () => {
        let timerNode = getElementFromTemplate(header).querySelector(`.game__timer`);
        timer(timerNode, -1);
      };
      assert.throws(changeTime);
    });
    it(`shouldn't be lives more then max lives count`, () => {
      const changeTime = () => {
        let timerNode = getElementFromTemplate(header).querySelector(`.game__timer`);
        timer(timerNode, constants.TIME + 1);
      };
      assert.throws(changeTime);
    });
  });
});
