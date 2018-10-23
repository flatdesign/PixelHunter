const changeScreen = (element) => {      // Смена экрана
  const central = document.querySelector(`.central`);
  central.innerHTML = ``;
  central.appendChild(element);
};

export default changeScreen;
