import data from './data';
import app from './Application';

const cloneObj = (obj) => {
  let copy;

  if (obj === null || typeof obj !== `object`) {
    return obj;
  }
  // Handle Date
  if (obj instanceof Date) {
    copy = new Date();
    copy.setTime(obj.getTime());
    return copy;
  }

  // Handle Array
  if (obj instanceof Array) {
    copy = [];
    for (let i = 0; i < obj.length; i++) {
      copy[i] = cloneObj(obj[i]);
    }
    return copy;
  }

  // Handle Object
  if (obj instanceof Object) {
    copy = {};
    for (let attr in obj) {
      if (obj.hasOwnProperty(attr)) {
        copy[attr] = cloneObj(obj[attr]);
      }
    }
    return copy;
  }

  throw new Error(`Unable to copy obj! Its type isn't supported.`);
};

const backToIntro = () => {
  data.currentState = cloneObj(data.initialState);
  console.log(data.initialState);
  app.showWelcome();
};

const deepFreeze = (o) => {
  Object.freeze(o);
  if (o === `undefined`) {
    return o;
  }

  Object.getOwnPropertyNames(o).forEach(function (prop) {
    if (o[prop] !== null && (typeof o[prop] === `object` || typeof o[prop] === `function`) && !Object.isFrozen(o[prop])) {
      deepFreeze(o[prop]);
    }
  });

  return o;
};

export default {cloneObj, backToIntro, deepFreeze};
