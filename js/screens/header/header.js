import HeaderView from './headerView';

const header = (state) => {
  const obj = new HeaderView(state);
  return obj.actions();
};

export default header;
