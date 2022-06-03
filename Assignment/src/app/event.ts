// events to trigger areas turning on or off
export class Event {
    // area to be altered
    area:string;
    // state to set the area to
    state:boolean;
    // time to set the state
    time:Date;

    constructor(area:string, state:boolean, time:Date){
        this.area = area;
        this.state = state;
        this.time = time;
    }
}