import Application from './Application';
import {status} from './utils';
import 'babel-polyfill';
import 'whatwg-fetch';

Application.showIntro();

window.fetch('https://intensive-ecmascript-server-nnpnvhhedl.now.sh/pixel-hunter/questions').
    then(status).
    then((response) => response.json()).
    then((data) => {
      Application.data = data;
    }).
    then(Application.showGreeting).
    catch(Application.showError);
