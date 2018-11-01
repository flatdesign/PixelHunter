import GreetingView from './greetingView';

const gretting = () => {
  const obj = new GreetingView();
  return obj.actions();
};

export default gretting;
