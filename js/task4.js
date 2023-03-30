let myObjectDuck = {
    name: 'Дональд',
    color: 'белый',
    age: 1,
    toStr: function() { console.log(this.name, this.color, this.age) },
    toSay: function () { console.log("Кря Кря") }
};

myObjectDuck.toStr()
myObjectDuck.toSay()