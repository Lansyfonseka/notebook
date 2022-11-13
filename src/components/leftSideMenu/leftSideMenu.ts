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

    menu.innerHTML = `
    <div class="menu--header">
            <div class="menu--header-title">Группы контактов</div>
            <button class="menu--header-close"></button>
          </div>
          <div class="menu--body">
            <div class="contact_group_line">
              <input type="text" name="group_name" class="contact_group_line--input">
              <button class="contact_group_line--delete"></button>
            </div>
            <div class="contact_group_line">
              <input type="text" name="group_name" class="contact_group_line--input">
              <button class="contact_group_line--delete"></button>
            </div>
            <div class="contact_group_line">
              <input type="text" name="group_name" class="contact_group_line--input">
              <button class="contact_group_line--delete"></button>
            </div>
          </div>
          <div class="menu--footer">
            <button class="menu--footer-add button hidden">Добавить</button>
            <button class="menu--footer-save button blue">Сохранить</button>
          </div>
    `

    const disableArae = document.createElement('div');
    disableArae.classList.add('disable_area');

    disableArae.addEventListener('click', () => {
      this.hide();
    })

    this.menuFrame = menuFrame;
    this.menu = menu;

    menuFrame.appendChild(menu);
    menuFrame.appendChild(disableArae);

    return menuFrame;
  }
  show() {
    console.log('block')
    this.menuFrame.style.display = 'grid';
  }
  hide() {
    this.menuFrame.style.display = 'none';
  }
}

export default new LeftSideMenu();