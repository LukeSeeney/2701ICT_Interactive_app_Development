export class Event {
    area:string;
    state:boolean;
    time:string;

    constructor(area:string, state:boolean, time:string){
        this.area = area;
        this.state = state;
        this.time = time;
    }
}