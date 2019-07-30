var TodoItem = /** @class */ (function () {
    function TodoItem(title) {
        this.title = title;
    }
    return TodoItem;
}());
var myTodo = new TodoItem("Go on Break / get some food");
console.log(myTodo.title);
