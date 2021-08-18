

export class Model {

  user;
  items;

  constructor() {
    this.user = "RandomName";
    this.items = [
      new TodoItem("Buy xyz", false),
      new TodoItem("Get xyz", false),
      new TodoItem("Collect xyz", false),
      new TodoItem("call xyz", false),

    ];
  }

}

export class TodoItem {
  action;
  done;

  constructor(action, done) {
    this.action = action;
    this.done = done;
  }
}
