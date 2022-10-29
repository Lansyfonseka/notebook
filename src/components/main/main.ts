import './main.scss'; 

class Main {
  constructor() {
    this.init = this.init.bind(this);
    this.render = this.render.bind(this);
  }
  init() {

  }

  render() {
    const main = document.createElement('main');
    main.classList.add('main');
    main.classList.add('empty');
    main.innerHTML = `
      <div class="empty_list">Список контактов пуст</div>`;
    return main;
  }
}

export default new Main();