import './leftSideMenu.scss';

class LeftSideMenu {
  menuFrame: HTMLDivElement;
  menu: HTMLDivElement;
  constructor() {
    this.render = this.render.bind(this);
  }
  render () {
    const menuFrame = document.createElement('div');
    menuFrame.classList.add('left_side_menu');

    const menu = document.createElement('div');
    menu.classList.add('menu');

    this.menuFrame = menuFrame;
    this.menu = menu;

    menuFrame.appendChild(menu);

    return menuFrame;
  }
  show() {
    console.log('block')
    this.menuFrame.style.display = 'block';
  }
  hide() {
    this.menuFrame.style.display = 'none';
  }
}

export default new LeftSideMenu();