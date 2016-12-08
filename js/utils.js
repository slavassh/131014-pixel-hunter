/**
 * Created by Viacheslav on 20.11.2016.
 */

export const getElementFromTemplate = (template) => {
  let node = document.createElement('div');
  node.innerHTML = template;
  return node.cloneNode(true);
};

export const insertBlock = (element) => {
  let mainElement = document.getElementById('main');
  mainElement.innerHTML = '';
  return mainElement.appendChild(element);
};
