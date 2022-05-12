// define a subject
class Subject {
    callbacks;
    constructor() {this.callbacks = [];}

    subscribe(fn) {this.callbacks.push(fn);}

    publish(data) {this.callbacks.forEach(fn => fn(data));}
}

// given instance subject of class subject
const subject = new Subject();

// set when to publish data
for(let i=0; i<5; i++){
    setTimeout(() => {
        subject.publish("data" + i)
        console.log('data ${i} published ${i} and half seconds after')
    }, 500 + 1000 * i);
}

// given 3 observers
const observer1 = (data) => console.log('observer 1 recieved data: ${data}');
const observer2 = (data) => console.log('observer 2 recieved data: ${data}');
const observer3 = (data) => console.log('observer 3 recieved data: ${data}');

// observer 1 and 2 subscribe subject 1 and 2 seconds after, respectively
setTimeout(() => {
    subject.subscribe(observer1);
    console.log("observer 1 subscribes 1 second after")
}, 1000);

setTimeout(() => {
    subject.subscribe(observer2);
    console.log("observer 2 subscribes 2 second after")
}, 2000);
