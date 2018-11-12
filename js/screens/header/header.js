import HeaderView from './headerView';

const header = (state) => {
  const obj = new HeaderView(state);
  return obj.bind();
};

export default header;
