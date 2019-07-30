class TodoItem {
    title: string;

    constructor(title:string){
        this.title = title;
    }
}

var myTodo = new TodoItem("Go on Break / get some food");
console.log(myTodo.title);