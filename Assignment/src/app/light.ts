export class Light {
    lightName: string;
    powerState: boolean;
    brightness: number;

    constructor(lightName:string, powerState:boolean, brightness:number){
        this.lightName = lightName;
        this.powerState = powerState;
        this.brightness = brightness;
    }
}
export class Area {
    areaName: string;
    switch:boolean;
    lights = [];

    constructor(areaName:string) {
        this.areaName = areaName;
        this.switch = false;
        this.lights = [new Light("Light 1", false, 100), new Light("Light 2", false, 100), new Light("Light 3", false, 100)];
    }
}
