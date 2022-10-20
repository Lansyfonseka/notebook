import './main.scss';
import App from './components/app/app';

const appInit = () => {
  App.init();
  document.removeEventListener('DOMContentLoaded', appInit);
};

window.addEventListener('DOMContentLoaded', appInit);