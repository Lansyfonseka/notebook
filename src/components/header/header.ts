import './header.scss';

class Header {
  constructor() {
    this.init = this.init.bind(this);
    this.render = this.render.bind(this);
  }
  init() {

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