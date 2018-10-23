const getElementFromTemplate = (text) => {
  let element = document.createElement(`template`);
  element.innerHTML = text;
  return element.content;
};

export default getElementFromTemplate;
