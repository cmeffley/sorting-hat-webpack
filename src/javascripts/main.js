import loadScreen from './components/loadScreen';
import domEvents from './helpers/data/domEvents';

import '../styles/main.scss';

const init = () => {
  loadScreen();
  domEvents();
};

init();
