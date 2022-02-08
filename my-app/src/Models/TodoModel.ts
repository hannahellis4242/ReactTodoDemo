import { v4 as uuid } from "uuid";

class TodoModel {
  id: string;
  constructor(public text: string) {
    this.id = uuid();
  }
}

export default TodoModel;
