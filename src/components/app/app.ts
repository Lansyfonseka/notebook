import './app.scss';
import Header from '../header/header';
import Main from '../main/main';
import LeftSideMenu from '../leftSideMenu/leftSideMenu';

class App {
  entryPoint: HTMLElement;
  constructor() {
    this.entryPoint = document.querySelector('.app');
  }
  init() {
    this.entryPoint.appendChild(Header.render());
    this.entryPoint.appendChild(Main.render());
    this.entryPoint.appendChild(LeftSideMenu.render());

    Header.init();
  }
}

export default new App();