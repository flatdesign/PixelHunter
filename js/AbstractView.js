
export default class AbstractView {
  set template(content) {
    this.content = content;
  }
  get template() {
    return this.content;
  }

  createElement() {
    let node = document.createElement(`template`);
    node.innerHTML = this.content;
    return node.content;
  }

  actions() {
    let node = this.createElement();
    return node;
  }
}
