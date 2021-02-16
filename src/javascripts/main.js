import loadScreen from './components/loadScreen';
import domEvents from './helpers/renderToDom';

import '../styles/main.scss';

const init = () => {
  loadScreen();
  domEvents();
};

init();
