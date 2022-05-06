export class Light {
    lightName: string;
    powerState: boolean;
    brightness: number;

    constructor(){
        this.lightName = "New Light";
        this.powerState = false;
        this.brightness = 0;
    }
}
export class Area {
    areaName: string;
    lights = [];

    constructor() {
        this.areaName = "New Area";
        this.lights = [new Light(), new Light(), new Light()];
        
    }
}
