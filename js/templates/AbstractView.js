import {getElementFromTemplate} from '../utils';

export default class AbstractView {

  get element() {
    if (!this._element) {
      this._element = getElementFromTemplate(this.getMarkup());
      this.bindHandlers();
      this.addClass();
    }
    return this._element;
  }

  getMarkup() {
    throw new Error('Abstract method should be implemented');
  }

  bindHandlers() {}

  clearHandlers() {}

  addClass() {}
}
