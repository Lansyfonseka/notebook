import Header from '../header/header';

class App {
  entryPoint: HTMLElement;
  constructor() {
    this.entryPoint = document.querySelector('.app');
  }
  init() {
    this.entryPoint.appendChild(Header.render());
  }
}

export default new App();