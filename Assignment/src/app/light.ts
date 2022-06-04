export class Light 
{
    // name of light
    lightName: string;
    // on / off state of light
    powerState: boolean;
    // light brightness
    brightness: number;
    // light wattage
    wattage:number;

    // times light was turned on and off most recently
    onTime:Date;
    offTime:Date;   
    
    // total time light was on most recently
    timeOn:any;

    constructor(lightName:string, powerState:boolean, brightness:number, wattage:number)
    {
        this.lightName = lightName;
        this.powerState = powerState;
        this.brightness = brightness;
        this.wattage = wattage;
    }
}
// area that has lights in it
export class Area 
{
    // name of area
    areaName: string;
    // switch variable to turn all lights in the area on or off
    switch:boolean;
    // lights stored in the area
    lights = [];

    // graph date and power usage storage
    dailyPower = [];
    //store dates of last 7 days
    //if day of power consumption spills over to another day calculate power consumed for each day of event
    // add power consumed to each day

    constructor(areaName:string) 
    {
        this.areaName = areaName;
        this.switch = false;
        this.lights = [];
    }
}
// daily power storage
export class DailyPower
{
    date: Date;

    powerUsed:any;
    
}
