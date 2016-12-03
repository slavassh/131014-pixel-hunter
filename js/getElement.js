/**
 * Created by Viacheslav on 20.11.2016.
 */

let getElementFromTemplate = (template) => {
  let node = document.createElement('div');
  node.innerHTML = template;
  return node.cloneNode(true);
};

export default getElementFromTemplate;

