import Application from './Application';
import polyfillPromise from 'core-js/es6/promise';
if (!window.Promise) {
  window.Promise = polyfillPromise;
}
import 'whatwg-fetch';

Application.showIntro();

const status = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

window.fetch('https://intensive-ecmascript-server-nnpnvhhedl.now.sh/pixel-hunter/questions').
    then(status).
    then((response) => response.json()).
    then((data) => {
      Application.data = data;
    }).
    then(Application.showGreeting).
    catch(Application.showError);
