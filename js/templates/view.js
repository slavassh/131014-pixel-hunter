import {getElementFromTemplate} from '../utils';

export default class AbstractView {

  get element() {
    if (!(this._element)) {
      console.dir(this._element);
      this._element = getElementFromTemplate(this.getMarkup());
      this._element.bindHandlers();
      console.dir(this._element);
    }
    return this._element;
  }

  getMarkup() {
    throw new Error('Abstract method should be implemented');
  }

  bindHandlers() {

  }

  clearHandlers() {

  }

}
