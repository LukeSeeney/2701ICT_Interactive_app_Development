export class Light {
    // name of light
    lightName: string;
    // on / off state of light
    powerState: boolean;
    // light brightness
    brightness: number;
    // light wattage
    wattage:number;

    constructor(lightName:string, powerState:boolean, brightness:number, wattage:number){
        this.lightName = lightName;
        this.powerState = powerState;
        this.brightness = brightness;
        this.wattage = wattage
    }
}
// area that has lights in it
export class Area {
    // name of area
    areaName: string;
    // switch variable to turn all lights in the area on or off
    switch:boolean;
    // lights stored in the area
    lights = [];

    constructor(areaName:string) {
        this.areaName = areaName;
        this.switch = false;
        this.lights = [];
    }
}
