/**
 * Created by Viacheslav on 11.12.2016.
 */
import {getElementFromTemplate} from '../utils';

export default class GameView {
  constructor() {
    this._root = getElementFromTemplate('');

    this._header = getElementFromTemplate('');
    this._question = getElementFromTemplate('');
    // this._stats = (new FooterView()).element;

    this._root.appendChild(this._header);
    this._root.appendChild(this._question);
    // this._question.appendChild(this._stats);
  }

  set header(view) {
    const element = view.element;
    this._root.replaceChild(element, this._header);
    this._header = element;
  }

  set question(view) {
    const element = view.element;
    this._root.replaceChild(element, this._question);
    this._question = element;
  }

  get element() {
    return this._root;
  }

}
