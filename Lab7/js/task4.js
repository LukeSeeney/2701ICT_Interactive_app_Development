// define a subject
var Subject = /** @class */ (function () {
    function Subject() {
        this.callbacks = [];
    }
    Subject.prototype.subscribe = function (fn) { this.callbacks.push(fn); };
    Subject.prototype.publish = function (data) { this.callbacks.forEach(function (fn) { return fn(data); }); };
    return Subject;
}());
// given instance subject of class subject
var subject = new Subject();
var _loop_1 = function (i) {
    setTimeout(function () {
        subject.publish("data" + i);
        console.log('data ${i} published ${i} and half seconds after');
    }, 500 + 1000 * i);
};
// set when to publish data
for (var i = 0; i < 5; i++) {
    _loop_1(i);
}
// given 3 observers
var observer1 = function (data) { return console.log('observer 1 recieved data: ${data}'); };
var observer2 = function (data) { return console.log('observer 2 recieved data: ${data}'); };
var observer3 = function (data) { return console.log('observer 3 recieved data: ${data}'); };
// observer 1 and 2 subscribe subject 1 and 2 seconds after, respectively
setTimeout(function () {
    subject.subscribe(observer1);
    console.log("observer 1 subscribes 1 second after");
}, 1000);
setTimeout(function () {
    subject.subscribe(observer2);
    console.log("observer 2 subscribes 2 second after");
}, 2000);
