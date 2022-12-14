import './header.scss';
import LeftSideMenu from '../leftSideMenu/leftSideMenu';

class Header {
  constructor() {
    this.init = this.init.bind(this);
    this.render = this.render.bind(this);
  }
  init() {
    const contatsGroups = document.querySelector('.controls-groups');
    contatsGroups.addEventListener('click', () => {
      console.log('Hello world')
      LeftSideMenu.show();
    })
  }

  render() {
    const header = document.createElement('header');
    header.classList.add('header');
    header.innerHTML = `
      <div class="title">Список контактов</div>
      <div class="controls">
        <button class="controls-add_new_contact button red">Добавить новый контакт</button>
        <button class="controls-groups button blue">Группы</button>
      </div>`;
    return header;
  }
}

export default new Header();