/**
 * Created by slavash on 21.11.2016.
 */

let insertBlock = (element) => {
  let mainElement = document.getElementById('main');
  mainElement.innerHTML = '';
  return mainElement.appendChild(element);
};

export default insertBlock;


